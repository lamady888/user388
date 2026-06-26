const HalftoneProcessor = (() => {
  const DEFAULT = {
    lpi: 35, angle: 22.5, softness: 45, gain: 40, type: 'dot',
    whiteUnderbase: true, blackRemoval: 30, midtoneDetail: 50,
    whiteStrength: 80, cleanupFilter: true, transparentBg: true,
    colorMode: 'original', garmentColor: '#111111',
  };

  const INK_COLORS = {
    original:  null,
    cream:     { dark: [245, 234, 216], light: [20, 10, 5] },
    sepia:     { dark: [232, 184, 75],  light: [40, 20, 5] },
    charcoal:  { dark: [200, 195, 185], light: [25, 22, 18] },
    vintage:   { dark: [210, 175, 130], light: [15, 10, 8] },
    mono:      { dark: [220, 215, 205], light: [10, 8, 6] },
  };

  let settings = { ...DEFAULT };
  let srcCanvas = null;
  let srcCtx = null;
  let srcImage = null;
  let debounceTimer = null;
  let initialized = false;

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }

  function isDark(hex) {
    const [r, g, b] = hexToRgb(hex);
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) < 128;
  }

  function process() {
    if (!srcImage) return;

    const outCanvas = document.getElementById('ht-out-canvas');
    const shirtCanvas = document.getElementById('ht-shirt-canvas');
    if (!outCanvas || !shirtCanvas) return;

    const W = srcCanvas.width;
    const H = srcCanvas.height;
    outCanvas.width = W;
    outCanvas.height = H;

    const ctx = outCanvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    const srcData = srcCtx.getImageData(0, 0, W, H).data;
    const lum = new Float32Array(W * H);
    const alpha = new Float32Array(W * H);
    const srcR = new Uint8ClampedArray(W * H);
    const srcG = new Uint8ClampedArray(W * H);
    const srcB = new Uint8ClampedArray(W * H);

    for (let i = 0; i < W * H; i++) {
      const p = i * 4;
      srcR[i] = srcData[p];
      srcG[i] = srcData[p + 1];
      srcB[i] = srcData[p + 2];
      alpha[i] = srcData[p + 3] / 255;
      lum[i] = (0.2126 * srcData[p] + 0.7152 * srcData[p + 1] + 0.0722 * srcData[p + 2]) / 255;
    }

    const lpi = settings.lpi;
    const cellSize = Math.max(3, Math.round(96 / lpi));
    const maxR = (cellSize * 0.5) * (1 + (settings.softness / 100) * 0.4);
    const gainF = 1 + (settings.gain / 100) * 1.2;
    const gamma = 1 - (settings.midtoneDetail / 100) * 0.6;
    const angleRad = (settings.angle * Math.PI) / 180;
    const cosA = Math.cos(angleRad);
    const sinA = Math.sin(angleRad);
    const cosNA = Math.cos(-angleRad);
    const sinNA = Math.sin(-angleRad);
    const halfW = W / 2;
    const halfH = H / 2;
    const diag = Math.ceil(Math.sqrt(W * W + H * H) / 2) + cellSize * 2;
    const garmentDark = isDark(settings.garmentColor);
    const inkMap = INK_COLORS[settings.colorMode];
    const brThresh = settings.blackRemoval / 100;

    ctx.save();

    for (let gy = -diag; gy <= diag; gy += cellSize) {
      for (let gx = -diag; gx <= diag; gx += cellSize) {
        const ix = Math.round(gx * cosA - gy * sinA + halfW);
        const iy = Math.round(gx * sinA + gy * cosA + halfH);
        if (ix < 0 || ix >= W || iy < 0 || iy >= H) continue;

        const idx = iy * W + ix;
        const a = alpha[idx];
        if (a < 0.05) continue;

        const rawLum = lum[idx];
        if (settings.cleanupFilter && rawLum > 0.97 && settings.transparentBg) continue;

        const nearBlack = rawLum < brThresh && garmentDark;
        if (nearBlack) continue;

        let l = Math.min(1, Math.pow(rawLum, gamma) * gainF);
        if (garmentDark) l = 1 - (1 - l) * (settings.whiteStrength / 100);

        const dotR = maxR * Math.max(0.05, l) * a;
        if (dotR < 0.5) continue;

        const sx = gx * cosNA - gy * sinNA + halfW;
        const sy = gx * sinNA + gy * cosNA + halfH;

        let inkR, inkG, inkB;
        if (inkMap) {
          const col = garmentDark ? inkMap.dark : inkMap.light;
          inkR = col[0]; inkG = col[1]; inkB = col[2];
        } else {
          inkR = srcR[idx]; inkG = srcG[idx]; inkB = srcB[idx];
        }

        const inkAlpha = Math.min(1, a * (settings.whiteUnderbase && garmentDark ? 1 : l + 0.3));
        ctx.fillStyle = `rgba(${inkR},${inkG},${inkB},${inkAlpha.toFixed(3)})`;

        drawShape(ctx, settings.type, sx, sy, dotR, cellSize, gx, gy);
      }
    }

    ctx.restore();
    renderShirtPreview(outCanvas, shirtCanvas);
    updatePixelDimensions();
  }

  function drawShape(ctx, type, sx, sy, dotR, cellSize, gx, gy) {
    switch (type) {
      case 'dot':
        ctx.beginPath();
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'line': {
        const lineW = Math.max(0.5, dotR * 0.65);
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-lineW / 2, -dotR, lineW, dotR * 2);
        ctx.restore();
        break;
      }

      case 'newspaper': {
        const sz = Math.max(1, dotR * 1.1);
        ctx.fillRect(sx - sz / 2, sy - sz / 2, sz, sz);
        break;
      }

      case 'engraved': {
        const lines = Math.max(1, Math.round(dotR / 1.8));
        const spacing = dotR * 2 / (lines + 1);
        ctx.save();
        ctx.beginPath();
        ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
        ctx.clip();
        for (let li = 1; li <= lines; li++) {
          const yOff = -dotR + li * spacing;
          ctx.fillRect(sx - dotR, sy + yOff - 0.6, dotR * 2, 1.2);
          if (li % 2 === 0) {
            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(Math.PI / 2);
            ctx.fillRect(-dotR, yOff - 0.6, dotR * 2, 0.8);
            ctx.restore();
          }
        }
        ctx.restore();
        break;
      }

      case 'stipple': {
        const count = Math.max(1, Math.round(dotR * dotR * 0.35));
        const seed = (Math.abs(gx * 1000 + gy) % 997);
        for (let si = 0; si < count; si++) {
          const angle = (seed + si * 137.508) % (Math.PI * 2);
          const dist = (((seed * si + si * 31 + 7) % 100) / 100) * dotR * 0.9;
          const px = sx + Math.cos(angle) * dist;
          const py = sy + Math.sin(angle) * dist;
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.4, dotR * 0.18), 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
    }
  }

  function renderShirtPreview(artCanvas, shirtCanvas) {
    const gc = settings.garmentColor;
    const W = 340, H = 380;
    shirtCanvas.width = W;
    shirtCanvas.height = H;
    const ctx = shirtCanvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    const scale = W / 200;
    ctx.save();
    ctx.scale(scale, scale);

    ctx.fillStyle = gc;
    ctx.strokeStyle = 'rgba(232,184,75,0.2)';
    ctx.lineWidth = 1.5 / scale;
    ctx.beginPath();
    ctx.moveTo(62, 6);
    ctx.quadraticCurveTo(100, 32, 138, 6);
    ctx.lineTo(196, 54);
    ctx.lineTo(160, 67);
    ctx.lineTo(160, 218);
    ctx.lineTo(40, 218);
    ctx.lineTo(40, 67);
    ctx.lineTo(4, 54);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();

    const artW = artCanvas.width;
    const artH = artCanvas.height;
    if (artW > 0 && artH > 0) {
      const printW = W * 0.42;
      const printH = printW * (artH / artW);
      const printX = (W - printW) / 2;
      const printY = H * 0.30;
      ctx.drawImage(artCanvas, printX, printY, printW, printH);
    }
  }

  function loadImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        srcImage = img;
        const MAX = 900;
        let w = img.width, h = img.height;
        if (w > MAX || h > MAX) {
          const s = Math.min(MAX / w, MAX / h);
          w = Math.round(w * s);
          h = Math.round(h * s);
        }
        srcCanvas = document.createElement('canvas');
        srcCanvas.width = w;
        srcCanvas.height = h;
        srcCtx = srcCanvas.getContext('2d');
        srcCtx.drawImage(img, 0, 0, w, h);

        showOriginalPreview();
        showProcessorUI();
        scheduleProcess();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function showOriginalPreview() {
    const origCanvas = document.getElementById('ht-orig-canvas');
    if (!origCanvas || !srcCanvas) return;
    origCanvas.width = srcCanvas.width;
    origCanvas.height = srcCanvas.height;
    origCanvas.getContext('2d').drawImage(srcCanvas, 0, 0);
  }

  function showProcessorUI() {
    const upload = document.getElementById('ht-upload-area');
    const proc = document.getElementById('ht-processor-ui');
    if (upload) upload.style.display = 'none';
    if (proc) proc.style.display = 'block';
  }

  function scheduleProcess() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(process, 90);
  }

  function updatePixelDimensions() {
    const wIn = parseFloat(document.getElementById('ht-print-w')?.value) || 12;
    const hIn = parseFloat(document.getElementById('ht-print-h')?.value) || 12;
    const dpi = parseInt(document.getElementById('ht-dpi')?.value) || 300;
    const el = document.getElementById('ht-px-dims');
    if (el) {
      el.textContent = `${Math.round(wIn * dpi).toLocaleString()} × ${Math.round(hIn * dpi).toLocaleString()} px @ ${dpi} DPI`;
    }
  }

  function exportTransparentPNG() {
    const c = document.getElementById('ht-out-canvas');
    if (!c || !srcImage) { showHtToast('Upload an image first'); return; }
    const a = document.createElement('a');
    a.download = 'dtf-halftone-transparent.png';
    a.href = c.toDataURL('image/png');
    a.click();
    showHtToast('Transparent PNG exported ✓');
  }

  function exportShirtPreview() {
    const c = document.getElementById('ht-shirt-canvas');
    if (!c || !srcImage) { showHtToast('Upload an image first'); return; }
    const a = document.createElement('a');
    a.download = 'dtf-shirt-preview.jpg';
    a.href = c.toDataURL('image/jpeg', 0.93);
    a.click();
    showHtToast('Shirt preview exported ✓');
  }

  function exportPrintBrief() {
    if (!srcImage) { showHtToast('Upload an image first'); return; }
    const wIn = document.getElementById('ht-print-w')?.value || '12';
    const hIn = document.getElementById('ht-print-h')?.value || '12';
    const dpi = document.getElementById('ht-dpi')?.value || '300';
    const type = settings.type;
    const lpi = settings.lpi;
    const angle = settings.angle;

    let brief = 'DTF HALFTONE PRINT BRIEF\n' + '═'.repeat(32) + '\n';
    brief += `Print size:     ${wIn}" × ${hIn}"\n`;
    brief += `Resolution:     ${dpi} DPI\n`;
    brief += `Pixel dims:     ${Math.round(parseFloat(wIn) * parseInt(dpi)).toLocaleString()} × ${Math.round(parseFloat(hIn) * parseInt(dpi)).toLocaleString()} px\n`;
    brief += `Format:         PNG (transparent)\n`;
    brief += `Colour mode:    RGB\n\n`;
    brief += 'HALFTONE SETTINGS\n' + '─'.repeat(32) + '\n';
    brief += `Type:           ${type}\n`;
    brief += `LPI:            ${lpi}\n`;
    brief += `Angle:          ${angle}°\n`;
    brief += `Softness:       ${settings.softness}%\n`;
    brief += `Ink gain:       ${settings.gain}%\n`;
    brief += `Colour mode:    ${settings.colorMode}\n\n`;
    brief += 'DTF DARK SHIRT SETTINGS\n' + '─'.repeat(32) + '\n';
    brief += `White underbase:    ${settings.whiteUnderbase ? 'ON' : 'OFF'}\n`;
    brief += `Black removal:      ${settings.blackRemoval}%\n`;
    brief += `Midtone detail:     ${settings.midtoneDetail}%\n`;
    brief += `White ink strength: ${settings.whiteStrength}%\n`;
    brief += `Cleanup filter:     ${settings.cleanupFilter ? 'ON' : 'OFF'}\n`;
    brief += `Transparent BG:     ${settings.transparentBg ? 'YES' : 'NO'}\n\n`;
    brief += 'NOTES\n' + '─'.repeat(32) + '\n';
    brief += '• Transparent PNG background — DTF print ready\n';
    brief += '• Check with printer for white ink underbase spec\n';
    brief += '• Confirm file dimensions match placement size';

    const blob = new Blob([brief], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = 'dtf-print-brief.txt';
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
    showHtToast('Print brief downloaded ✓');
  }

  function copyPrinterSettings() {
    const wIn = document.getElementById('ht-print-w')?.value || '12';
    const hIn = document.getElementById('ht-print-h')?.value || '12';
    const dpi = document.getElementById('ht-dpi')?.value || '300';
    const text = `DTF Print: ${wIn}" × ${hIn}" | ${dpi} DPI | ${settings.type} halftone | LPI ${settings.lpi} | angle ${settings.angle}° | ${settings.colorMode} | transparent PNG | white underbase: ${settings.whiteUnderbase ? 'YES' : 'NO'}`;
    navigator.clipboard.writeText(text).then(() => showHtToast('Printer settings copied ✓'));
  }

  function resetImage() {
    srcImage = null;
    srcCanvas = null;
    srcCtx = null;
    const upload = document.getElementById('ht-upload-area');
    const proc = document.getElementById('ht-processor-ui');
    if (upload) upload.style.display = 'flex';
    if (proc) proc.style.display = 'none';
    const origCanvas = document.getElementById('ht-orig-canvas');
    const outCanvas = document.getElementById('ht-out-canvas');
    const shirtCanvas = document.getElementById('ht-shirt-canvas');
    [origCanvas, outCanvas, shirtCanvas].forEach(c => {
      if (c) { const ctx = c.getContext('2d'); ctx.clearRect(0, 0, c.width, c.height); }
    });
    showHtToast('Image removed');
  }

  function showHtToast(msg) {
    if (typeof showToast === 'function') showToast(msg);
  }

  function bindSlider(id, key) {
    const el = document.getElementById(id);
    const disp = document.getElementById(id + '-val');
    if (!el) return;
    el.value = settings[key];
    if (disp) disp.textContent = el.value + (id.includes('angle') ? '°' : '%');
    el.addEventListener('input', () => {
      settings[key] = parseFloat(el.value);
      if (disp) disp.textContent = el.value + (id.includes('angle') ? '°' : '%');
      scheduleProcess();
    });
  }

  function bindToggle(id, key) {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = settings[key];
    el.addEventListener('change', () => {
      settings[key] = el.checked;
      scheduleProcess();
    });
  }

  function init() {
    if (initialized) return;
    initialized = true;

    const uploadArea = document.getElementById('ht-upload-area');
    const fileInput = document.getElementById('ht-file-input');

    if (uploadArea) {
      uploadArea.addEventListener('click', () => fileInput && fileInput.click());
      uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
      uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
      uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        const f = e.dataTransfer.files[0];
        if (f && f.type.startsWith('image/')) loadImage(f);
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) loadImage(fileInput.files[0]);
      });
    }

    const typeSelect = document.getElementById('ht-type');
    if (typeSelect) {
      typeSelect.value = settings.type;
      typeSelect.addEventListener('change', () => {
        settings.type = typeSelect.value;
        scheduleProcess();
      });
    }

    const colorModes = document.querySelectorAll('.ht-color-pill');
    colorModes.forEach(btn => {
      if (btn.dataset.mode === settings.colorMode) btn.classList.add('active');
      btn.addEventListener('click', () => {
        colorModes.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        settings.colorMode = btn.dataset.mode;
        scheduleProcess();
      });
    });

    const garmentBtns = document.querySelectorAll('.ht-garment-btn');
    garmentBtns.forEach(btn => {
      if (btn.dataset.color === settings.garmentColor) btn.classList.add('active');
      btn.addEventListener('click', () => {
        garmentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        settings.garmentColor = btn.dataset.color;
        scheduleProcess();
      });
    });

    const lpiSlider = document.getElementById('ht-lpi');
    const lpiDisp = document.getElementById('ht-lpi-val');
    if (lpiSlider) {
      lpiSlider.value = settings.lpi;
      if (lpiDisp) lpiDisp.textContent = settings.lpi;
      lpiSlider.addEventListener('input', () => {
        settings.lpi = parseInt(lpiSlider.value);
        if (lpiDisp) lpiDisp.textContent = lpiSlider.value;
        scheduleProcess();
      });
    }

    const angleSlider = document.getElementById('ht-angle');
    const angleDisp = document.getElementById('ht-angle-val');
    if (angleSlider) {
      angleSlider.value = settings.angle;
      if (angleDisp) angleDisp.textContent = settings.angle + '°';
      angleSlider.addEventListener('input', () => {
        settings.angle = parseFloat(angleSlider.value);
        if (angleDisp) angleDisp.textContent = angleSlider.value + '°';
        scheduleProcess();
      });
    }

    bindSlider('ht-softness', 'softness');
    bindSlider('ht-gain', 'gain');
    bindSlider('ht-black-removal', 'blackRemoval');
    bindSlider('ht-midtone', 'midtoneDetail');
    bindSlider('ht-white-strength', 'whiteStrength');
    bindToggle('ht-underbase', 'whiteUnderbase');
    bindToggle('ht-cleanup', 'cleanupFilter');
    bindToggle('ht-transparent', 'transparentBg');

    const printW = document.getElementById('ht-print-w');
    const printH = document.getElementById('ht-print-h');
    const dpiSel = document.getElementById('ht-dpi');
    [printW, printH, dpiSel].forEach(el => {
      if (el) el.addEventListener('change', () => { updatePixelDimensions(); });
    });

    document.getElementById('ht-export-png')?.addEventListener('click', exportTransparentPNG);
    document.getElementById('ht-export-shirt')?.addEventListener('click', exportShirtPreview);
    document.getElementById('ht-export-brief')?.addEventListener('click', exportPrintBrief);
    document.getElementById('ht-copy-settings')?.addEventListener('click', copyPrinterSettings);
    document.getElementById('ht-reset-image')?.addEventListener('click', resetImage);

    updatePixelDimensions();
  }

  return { init };
})();
