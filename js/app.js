/* ─── DATA ─── */
const SECTIONS = [
  {title:"DESIGN TYPE", fields:[
    {id:"dtype", label:"DESIGN CATEGORY", pk:"design type", options:[
      "character portrait","full body character","pattern / repeat",
      "quote with decorative text","logo / brand mark","animal portrait",
      "African cultural design","Afrofuturism illustration","nature / botanical",
      "abstract graphic","geometric pattern","mandala / sacred geometry",
      "streetwear graphic","sports graphic","kids design","holiday / seasonal",
      "inspirational quote","couple portrait","family portrait","pet portrait",
      "vintage label design","jersey / uniform graphic","name & number design",
      "memorial tribute design","religious / faith design","music / band merch",
      "business logo tee","event / party design","team graphic"
    ]},
    {id:"placement", label:"PLACEMENT / USE", pk:"placement", options:[
      "chest print (left)","chest print (centre)","full front","full back",
      "sleeve print","pocket print","hat patch","tote bag","hoodie front",
      "kids garment","baby onesie","cap design","phone case","sticker sheet",
      "poster graphic","standalone decal","all-over print","yoke print",
      "shoulder print","lower back print","full sleeve wrap","leg print"
    ]},
  ]},
  {title:"ART STYLE", fields:[
    {id:"style", label:"ILLUSTRATION STYLE", pk:"art style", options:[
      "bold vector graphic","clean flat design","Afrofuturism digital art",
      "African comic book art","hyper-realistic portrait","airbrushed urban illustration",
      "3D CGI render","watercolour illustration","West African poster art",
      "amplified chibi","glossy 3d chibi","anime style illustration",
      "hyper-real cartoon","ultra airbrushed","gouache mixed watercolor",
      "cgi caricature","hyper realistic illustration","hand-drawn cartoon",
      "Pixar 3D render","retro vintage cartoon","comic book style",
      "bold graffiti art","minimalist line art","stained glass style",
      "Art Deco illustration","psychedelic pop art","street art / mural style",
      "tattoo flash art","ukiyo-e woodblock style","Baroque portrait style",
      "vintage halftone / distressed screen print","vintage concert tee graphic","retro bitmap illustration"
    ]},
    {id:"finish", label:"ART FINISH", pk:"finish", options:[
      "high gloss illustration","soft airbrushed shine","cell-shaded gloss",
      "ultra polished digital paint","candy-coated finish","silky poster finish",
      "glossy","warm earth tone wash","golden hour cinematic",
      "matte fine art finish","dramatic contrast finish","neon pop art finish",
      "metallic sheen finish","holographic glow","vintage faded finish",
      "high contrast ink finish","smooth vector clean finish",
      "distressed screen-print finish","washed vintage ink finish"
    ]},
  ]},
  {title:"COLOURS & MOOD", fields:[
    {id:"palette", label:"COLOUR PALETTE", pk:"colour palette", options:[
      "vibrant full colour","bold primary colours",
      "earth tones (browns, terracotta, gold)",
      "African kente colours (red, gold, green, black)",
      "neon / electric colours","monochrome black and white","monochrome gold",
      "pastel soft tones","deep jewel tones","warm sunset palette",
      "cool midnight palette","red white and blue","high contrast black and gold",
      "tropical bright colours","muted vintage tones","metallic gold and silver",
      "black and red","forest greens and browns","purple and gold royalty",
      "ocean blues and teals","fire reds and oranges","desert sand tones",
      "rainbow spectrum","duotone (two-colour)"
    ]},
    {id:"mood", label:"MOOD / ENERGY", pk:"mood", options:[
      "powerful and regal","fun and playful","fierce and bold","soft and elegant",
      "spiritual and mystical","celebratory and joyful","street and urban",
      "cool and minimal","dark and dramatic","warm and loving","adventurous",
      "nostalgic and retro","empowering","peaceful and serene",
      "rebellious and edgy","luxurious and opulent","patriotic and proud"
    ]},
  ]},
  {title:"SUBJECT", fields:[
    {id:"subject", label:"MAIN SUBJECT", pk:"subject", options:[
      "African queen","Yoruba goddess","Nubian warrior","Afrofuturist character",
      "woman portrait","man portrait","child portrait","couple","family",
      "lion","black panther","eagle","elephant","flower bouquet","tropical plants",
      "African landscape","abstract shape","crown","text and lettering","mandala",
      "sun and moon","praying hands","butterfly","dragon","superhero",
      "anime character","angel","skull (decorative)","cityscape",
      "phoenix rising","wolf","tiger","rose / roses","hummingbird","koi fish",
      "samurai","viking warrior","basketball player","football player",
      "gospel choir","jazz musician","graduation cap and diploma",
      "baby shower motif","wedding design","African mother and child",
      "spiritual figure","Oya / Oshun deity","map of Africa"
    ]},
    {id:"culture", label:"CULTURAL INFLUENCE", pk:"cultural influence", options:[
      "none","Igbo / Nigerian","Yoruba","West African","East African",
      "Pan-African","Afro-Caribbean","Ethiopian","Ghanaian","South African",
      "Zulu","Maasai","North African / Moroccan","Afrofuturist",
      "Universal / no specific culture","African-American","Jamaican / Rastafari",
      "Haitian","Dominican","Brazilian Afro-diaspora"
    ]},
  ]},
  {title:"DETAILS", fields:[
    {id:"textEl", label:"TEXT / QUOTE", pk:"text element", options:[
      "no text","add a motivational quote","add a name or word",
      "add a scripture reference","add a date or year",
      "add a slogan or brand name","add an African proverb",
      "large bold statement word","small subtle tagline",
      "add a Bible verse","RIP memorial text","event name and date",
      "team name and number","add a city or location","graduation year",
      "add a hashtag","custom short phrase"
    ]},
    {id:"extras", label:"EXTRA ELEMENTS", pk:"extra details", options:[
      "none","floral border / wreath","geometric border","stars and sparkles",
      "crown above subject","halo glow","African patterns in background",
      "kente texture overlay","fire / flames","water ripple effect","butterflies",
      "leaves and vines","chains (decorative)","wings","smoke and mist","confetti",
      "rays of light","lightning bolts","money / currency symbols",
      "clouds and sky","leopard print accents","gold coins scatter",
      "ancestral spirits / silhouettes","Adinkra symbols","map of Africa outline",
      "rose petals","banner / ribbon","laurel wreath"
    ]},
  ]},
  {title:"GARMENT & FABRIC", fields:[
    {id:"garment", label:"GARMENT TYPE", pk:"garment", options:[
      "t-shirt","hoodie","sweatshirt","polo shirt","long sleeve shirt",
      "tank top","crop top","baby onesie","kids tee","sportswear / jersey",
      "tote bag / canvas bag","hat / cap","jacket","denim jacket",
      "windbreaker","pyjamas / loungewear","button-up shirt","bomber jacket"
    ]},
    {id:"fabric", label:"FABRIC TYPE", pk:"fabric", options:[
      "100% cotton","cotton / polyester blend (50/50)","polyester (100%)",
      "heavyweight cotton (fleece)","performance / athletic fabric",
      "stretch / spandex blend","canvas / denim","bamboo / organic cotton"
    ]},
  ]},
  {title:"DTF SPECS", fields:[
    {id:"bg", label:"BACKGROUND", pk:"background", options:[
      "transparent background PNG (DTF ready)",
      "isolated design — transparent PNG",
      "cut-out with no background"
    ]},
    {id:"quality", label:"OUTPUT QUALITY", pk:"quality", options:[
      "300 DPI print-ready","high resolution 600 DPI",
      "sharp edges optimised for DTF transfer",
      "vector-style clean edges for DTF",
      "bold solid colours for clean DTF transfer"
    ]},
  ]},
];

/* ─── SHIRT COLOURS ─── */
const SHIRT_COLORS = [
  {name:"Black",  hex:"#111111"},
  {name:"White",  hex:"#EFEFEF"},
  {name:"Grey",   hex:"#6E6E6E"},
  {name:"Navy",   hex:"#1A237E"},
  {name:"Royal",  hex:"#1565C0"},
  {name:"Red",    hex:"#C62828"},
  {name:"Forest", hex:"#2E7D32"},
  {name:"Maroon", hex:"#6D1A36"},
  {name:"Gold",   hex:"#F9A825"},
  {name:"Purple", hex:"#6A1B9A"},
];
let shirtColorHex = "#111111";

/* ─── PLACEMENT ZONES (SVG coords in 200×225 viewBox) ─── */
const PLACEMENT_ZONES = {
  "chest print (left)":   {x:47,  y:80,  w:40,  h:40,  label:"CHEST LEFT"},
  "chest print (centre)": {x:76,  y:80,  w:48,  h:48,  label:"CHEST CENTRE"},
  "full front":           {x:44,  y:70,  w:112, h:118, label:"FULL FRONT"},
  "full back":            {x:44,  y:70,  w:112, h:118, label:"FULL BACK"},
  "sleeve print":         {x:8,   y:28,  w:28,  h:36,  label:"SLEEVE"},
  "pocket print":         {x:47,  y:80,  w:30,  h:30,  label:"POCKET"},
  "hat patch":            {x:62,  y:80,  w:76,  h:42,  label:"HAT PATCH"},
  "tote bag":             {x:58,  y:78,  w:84,  h:65,  label:"TOTE BAG"},
  "hoodie front":         {x:72,  y:76,  w:56,  h:58,  label:"HOODIE FRONT"},
  "kids garment":         {x:72,  y:80,  w:56,  h:54,  label:"KIDS"},
  "baby onesie":          {x:76,  y:86,  w:48,  h:46,  label:"BABY ONESIE"},
  "lower back print":     {x:52,  y:150, w:96,  h:56,  label:"LOWER BACK"},
  "shoulder print":       {x:44,  y:68,  w:58,  h:38,  label:"SHOULDER"},
  "yoke print":           {x:44,  y:68,  w:112, h:40,  label:"YOKE"},
  "all-over print":       {x:42,  y:68,  w:116, h:150, label:"ALL OVER"},
  "full sleeve wrap":     {x:6,   y:24,  w:30,  h:42,  label:"SLEEVE WRAP"},
};

/* ─── APPAREL PRESETS ─── */
const APPAREL_PRESETS = [
  {label:"Tag",        w:1.5, h:1.5},
  {label:"Pocket",     w:4,   h:4},
  {label:"Chest",      w:12,  h:12},
  {label:"Full Front", w:13,  h:16},
  {label:"Full Back",  w:12,  h:14},
  {label:"Sleeve",     w:4,   h:12},
  {label:"Kids",       w:8,   h:8},
  {label:"Baby",       w:6,   h:6},
];

/* ─── STATE ─── */
const LS_STATE = 'dtf_state';
const LS_HISTORY = 'dtf_history';
const LS_DESIGNS = 'dtf_designs';
const LS_NAME = 'dtf_design_name';

let state = {};
SECTIONS.forEach(s => s.fields.forEach(f => {
  state[f.id] = { value: f.options[0], custom: "", include: true, showCustom: false };
}));

let designs = [];

/* ─── PERSIST ─── */
function saveState() {
  try {
    localStorage.setItem(LS_STATE, JSON.stringify(state));
    localStorage.setItem(LS_DESIGNS, JSON.stringify(designs));
    const name = document.getElementById('design-name');
    if (name) localStorage.setItem(LS_NAME, name.value);
    showAutosave();
  } catch(e) {}
}

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_STATE) || 'null');
    if (saved) {
      Object.keys(saved).forEach(k => {
        if (!state[k]) return;
        const field = findField(k);
        const savedVal = saved[k].value;
        if (field && !field.options.includes(savedVal)) {
          saved[k].value = field.options[0];
        }
        state[k] = { ...state[k], ...saved[k] };
      });
    }
    const savedDesigns = JSON.parse(localStorage.getItem(LS_DESIGNS) || 'null');
    if (savedDesigns) designs = savedDesigns;
    const savedName = localStorage.getItem(LS_NAME);
    if (savedName) {
      const el = document.getElementById('design-name');
      if (el) el.value = savedName;
    }
  } catch(e) {}
}

function findField(id) {
  for (const sec of SECTIONS) {
    for (const f of sec.fields) {
      if (f.id === id) return f;
    }
  }
  return null;
}

let autosaveTimer = null;
function showAutosave() {
  const ind = document.getElementById('autosave-ind');
  if (!ind) return;
  ind.classList.add('show');
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => ind.classList.remove('show'), 2500);
}

/* ─── HISTORY ─── */
function addToHistory(prompt) {
  try {
    const hist = JSON.parse(localStorage.getItem(LS_HISTORY) || '[]');
    hist.unshift({ prompt, ts: Date.now() });
    if (hist.length > 10) hist.pop();
    localStorage.setItem(LS_HISTORY, JSON.stringify(hist));
    renderHistory();
    updateStatPrompts();
  } catch(e) {}
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY) || '[]'); } catch(e) { return []; }
}

function renderHistory() {
  const el = document.getElementById('hist-list');
  if (!el) return;
  const hist = getHistory();
  if (!hist.length) {
    el.innerHTML = '<p class="sel-empty">No prompts generated yet.</p>';
    return;
  }
  el.innerHTML = hist.slice(0, 5).map((h, i) =>
    `<div class="hist-item">
      <div class="hist-time">${timeAgo(h.ts)}</div>
      <div class="hist-preview">${escHtml(h.prompt.substring(0, 85))}…</div>
      <div class="hist-actions">
        <button class="hist-btn hist-btn-use" onclick="useHistoryPrompt(${i})">Use this</button>
        <button class="hist-btn hist-btn-copy" onclick="copyHistoryPrompt(${i})">Copy</button>
      </div>
    </div>`
  ).join('');
}

function useHistoryPrompt(i) {
  const hist = getHistory();
  if (!hist[i]) return;
  const p = hist[i].prompt;
  document.getElementById('prompt-out').value = p;
  document.getElementById('out-prompt').value = p;
  showToast('Prompt restored from history');
}

function copyHistoryPrompt(i) {
  const hist = getHistory();
  if (!hist[i]) return;
  navigator.clipboard.writeText(hist[i].prompt).then(() => showToast('Prompt copied ✓'));
}

function clearHistory() {
  if (!confirm('Clear all prompt history?')) return;
  localStorage.removeItem(LS_HISTORY);
  renderHistory();
  updateStatPrompts();
  showToast('History cleared');
}

function updateStatPrompts() {
  const el = document.getElementById('stat-prompts');
  if (el) el.textContent = getHistory().length;
}

function timeAgo(ts) {
  const d = Date.now() - ts;
  if (d < 60000) return 'just now';
  if (d < 3600000) return Math.floor(d / 60000) + 'm ago';
  if (d < 86400000) return Math.floor(d / 3600000) + 'h ago';
  return Math.floor(d / 86400000) + 'd ago';
}

/* ─── FORM ─── */
function buildForm() {
  const col = document.getElementById('form-col');
  col.innerHTML = '';
  SECTIONS.forEach((sec, si) => {
    const s = document.createElement('div');
    s.className = 'section';
    const num = si < 9 ? '0' + (si + 1) : (si + 1);
    s.innerHTML = `<div class="sec-head"><span class="sec-num">${num}</span><span class="sec-name">${sec.title}</span><div class="sec-rule"></div></div>`;
    const g = document.createElement('div');
    g.className = 'fields-grid';
    sec.fields.forEach(f => {
      const locked = f.id === 'bg';
      const c = document.createElement('div');
      c.className = 'fcard';
      c.innerHTML = `
        <div class="flabel">${f.label}${locked ? ' <span style="color:var(--rust-light);font-size:9px">● DTF LOCKED</span>' : ''}</div>
        <select class="fselect" id="s-${f.id}" onchange="onSel('${f.id}',this.value)"${locked ? ' disabled' : ''}>
          ${f.options.map(o => `<option value="${o}"${state[f.id].value === o ? ' selected' : ''}>${o}</option>`).join('')}
        </select>
        ${!locked ? `
          <span class="add-custom" onclick="toggleC('${f.id}')">+ Add custom value</span>
          <div id="cw-${f.id}" style="display:${state[f.id].showCustom ? 'block' : 'none'}">
            <input type="text" class="cinput" id="ci-${f.id}" placeholder="Enter custom value..." value="${escAttr(state[f.id].custom)}" oninput="onCI('${f.id}',this.value)">
          </div>
          <div class="inc-row">
            <div class="cbox${state[f.id].include ? ' on' : ''}" id="cb-${f.id}" onclick="toggleI('${f.id}')"></div>
            <span class="inc-label" onclick="toggleI('${f.id}')">Include in prompt</span>
          </div>
        ` : '<p style="font-size:10px;color:var(--rust-light);margin-top:8px;font-weight:600">Always transparent for DTF ✓</p>'}
      `;
      g.appendChild(c);
    });
    s.appendChild(g);
    col.appendChild(s);
  });
}

function onSel(id, v) { state[id].value = v; updateSel(); saveState(); if (id === 'placement') updateMockup(); }
function onCI(id, v) { state[id].custom = v; updateSel(); saveState(); }
function toggleC(id) {
  state[id].showCustom = !state[id].showCustom;
  document.getElementById(`cw-${id}`).style.display = state[id].showCustom ? 'block' : 'none';
}
function toggleI(id) {
  state[id].include = !state[id].include;
  document.getElementById(`cb-${id}`).className = 'cbox' + (state[id].include ? ' on' : '');
  updateSel();
  saveState();
  if (id === 'placement') updateMockup();
}
function onDesignNameChange() { saveState(); }

function getVal(id) { const s = state[id]; return s.custom.trim() ? s.custom.trim() : s.value; }
function inc(id) { return state[id].include && getVal(id) !== 'none'; }

function updateSel() {
  const el = document.getElementById('sel-list');
  let html = '';
  let any = false;
  SECTIONS.forEach(s => {
    const rows = s.fields
      .filter(f => state[f.id].include && getVal(f.id) !== 'none')
      .map(f => `<div class="sel-row"><span class="sel-key">${cap(f.pk)}:</span> ${escHtml(getVal(f.id))}</div>`)
      .join('');
    if (rows) { html += `<div class="sel-sec">${s.title}</div>${rows}`; any = true; }
  });
  el.innerHTML = any ? html : '<p class="sel-empty">Start selecting to see your design take shape...</p>';
}

/* ─── GARMENT MOCKUP ─── */
function buildSwatches() {
  const el = document.getElementById('swatches');
  if (!el) return;
  el.innerHTML = SHIRT_COLORS.map(c =>
    `<div class="swatch${c.hex === shirtColorHex ? ' active' : ''}"
      style="background:${c.hex};${c.hex === '#EFEFEF' ? 'border-color:rgba(100,100,100,0.4)' : ''}"
      title="${c.name}"
      onclick="setShirtColor('${c.hex}')"></div>`
  ).join('');
}

function setShirtColor(hex) {
  shirtColorHex = hex;
  const path = document.getElementById('shirt-body');
  if (path) path.setAttribute('fill', hex);
  buildSwatches();
}

function updateMockup() {
  const placement = (inc('placement') ? getVal('placement') : null) || 'chest print (centre)';
  const zone = PLACEMENT_ZONES[placement] || PLACEMENT_ZONES['chest print (centre)'];
  const hint = document.getElementById('placement-hint');
  const rect = document.getElementById('pl-rect');
  const text = document.getElementById('pl-text');
  const dpiEl = document.getElementById('mockup-dpi');

  if (hint) hint.textContent = placement;
  if (rect) {
    rect.setAttribute('x', zone.x);
    rect.setAttribute('y', zone.y);
    rect.setAttribute('width', zone.w);
    rect.setAttribute('height', zone.h);
  }
  if (text) {
    text.setAttribute('x', zone.x + zone.w / 2);
    text.setAttribute('y', zone.y + zone.h / 2 + 2.5);
    text.textContent = zone.label;
  }
  if (dpiEl) {
    const dpiSel = document.getElementById('sheet-dpi');
    const dpi = dpiSel ? parseInt(dpiSel.value) : 300;
    const fieldW = findField('placement');
    const qSel = document.getElementById('nd-w');
    const w = qSel ? parseFloat(qSel.value) : null;
    const h = qSel ? parseFloat(document.getElementById('nd-h').value) : null;
    if (w && h) {
      dpiEl.textContent = `${w}" × ${h}" @ ${dpi} DPI = ${Math.round(w*dpi).toLocaleString()} × ${Math.round(h*dpi).toLocaleString()} px`;
    } else {
      dpiEl.textContent = `placement: ${placement}`;
    }
  }
}

/* ─── APPAREL PRESETS ─── */
function buildPresets() {
  const el = document.getElementById('nd-presets');
  if (!el) return;
  el.innerHTML = APPAREL_PRESETS.map(p =>
    `<button class="nd-preset-btn" onclick="applyPreset('${escHtml(p.label)}',${p.w},${p.h})">${escHtml(p.label)}</button>`
  ).join('');
}

function applyPreset(label, w, h) {
  const wSel = document.getElementById('nd-w');
  const hSel = document.getElementById('nd-h');
  const nameSel = document.getElementById('nd-name');
  if (wSel) {
    const closest = Array.from(wSel.options).map(o => parseFloat(o.value))
      .reduce((a, b) => Math.abs(b - w) < Math.abs(a - w) ? b : a);
    wSel.value = closest;
  }
  if (hSel) {
    const closest = Array.from(hSel.options).map(o => parseFloat(o.value))
      .reduce((a, b) => Math.abs(b - h) < Math.abs(a - h) ? b : a);
    hSel.value = closest;
  }
  if (nameSel && !nameSel.value.trim()) nameSel.value = label;
  updateMockup();
  showToast(label + ' preset: ' + w + '" × ' + h + '"');
}

/* ─── PROMPT ─── */
function generatePrompt() {
  const name = (document.getElementById('design-name').value || '').trim();
  const g = id => inc(id) ? getVal(id) : '';

  const dtype = g('dtype'), placement = g('placement');
  const style = g('style'), finish = g('finish');
  const palette = g('palette'), mood = g('mood');
  const subject = g('subject'), culture = g('culture');
  const textEl = g('textEl'), extras = g('extras');
  const garment = g('garment'), fabric = g('fabric');
  const quality = g('quality');

  const parts = [];

  let opening = '';
  if (style) opening += style + ', ';
  if (dtype) opening += dtype;
  if (opening.trim()) parts.push(opening.trim().replace(/,\s*$/, ''));

  if (subject && subject !== 'none') {
    let subj = 'featuring a ' + subject;
    if (culture && culture !== 'none' && culture !== 'Universal / no specific culture') {
      subj += ' with ' + culture + ' cultural influence';
    }
    parts.push(subj);
  } else if (culture && culture !== 'none' && culture !== 'Universal / no specific culture') {
    parts.push('with ' + culture + ' cultural influence');
  }

  if (palette) parts.push('colour palette: ' + palette);
  if (mood) parts.push('mood: ' + mood);
  if (extras && extras !== 'none') parts.push('include ' + extras);
  if (textEl && textEl !== 'no text') parts.push(textEl);
  if (name) parts.push('design titled "' + name + '"');
  if (placement) parts.push('designed for ' + placement);
  if (garment) parts.push('for a ' + garment);
  if (fabric) parts.push('on ' + fabric);
  if (finish) parts.push(finish);

  parts.push('transparent background PNG, isolated design with no background, DTF print ready');
  if (quality) parts.push(quality);

  let prompt = parts.join('. ') + '.';
  prompt = prompt.replace(/\.\s*\./g, '.').replace(/\s+/g, ' ').trim();

  document.getElementById('prompt-out').value = prompt;
  document.getElementById('out-prompt').value = prompt;

  addToHistory(prompt);
  updateSheetOutput();
  saveState();
  showToast('Prompt generated ✓');

  const btn = document.getElementById('gen-btn');
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = '✓ Done';
    setTimeout(() => btn.textContent = orig, 1800);
  }
}

function copyPrompt() {
  const t = document.getElementById('prompt-out').value;
  if (!t) { showToast('Generate a prompt first'); return; }
  navigator.clipboard.writeText(t).then(() => {
    const b = document.getElementById('copy-btn');
    b.textContent = '✓ Copied';
    setTimeout(() => b.textContent = '⧉ Copy', 2200);
    showToast('Prompt copied to clipboard');
  });
}

function copyEl(id, btn) {
  const t = document.getElementById(id).value;
  if (!t) { showToast('Nothing to copy yet'); return; }
  navigator.clipboard.writeText(t).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = orig, 2200);
    showToast('Copied to clipboard ✓');
  });
}

/* ─── DOWNLOAD ─── */
function dlTxt(content, filename) {
  if (!content.trim()) { showToast('Nothing to download yet'); return; }
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Downloaded: ' + filename);
}

function downloadPrompt() {
  const t = document.getElementById('prompt-out').value || document.getElementById('out-prompt').value;
  const name = (document.getElementById('design-name').value || 'dtf-prompt').trim().replace(/\s+/g, '-').toLowerCase();
  dlTxt(t, name + '-prompt.txt');
}

function downloadBrief() {
  const t = document.getElementById('out-sheet').value;
  dlTxt(t, 'gang-sheet-brief.txt');
}

/* ─── RANDOMIZE / RESET ─── */
function randomize() {
  SECTIONS.forEach(s => s.fields.forEach(f => {
    if (f.id === 'bg') return;
    const pick = f.options[Math.floor(Math.random() * f.options.length)];
    state[f.id].value = pick;
    state[f.id].include = true;
    state[f.id].custom = '';
    state[f.id].showCustom = false;
  }));
  buildForm();
  updateSel();
  generatePrompt();
}

function resetAll() {
  SECTIONS.forEach(s => s.fields.forEach(f => {
    state[f.id] = { value: f.options[0], custom: '', include: true, showCustom: false };
  }));
  const nameEl = document.getElementById('design-name');
  if (nameEl) nameEl.value = '';
  buildForm();
  updateSel();
  document.getElementById('prompt-out').value = '';
  document.getElementById('out-prompt').value = '';
  localStorage.removeItem(LS_STATE);
  localStorage.removeItem(LS_NAME);
  showToast('Reset to defaults');
}

/* ─── PLANNER ─── */
function getSheet() {
  const v = document.getElementById('sheet-size').value;
  document.getElementById('custom-size-row').style.display = v === 'custom' ? 'block' : 'none';
  if (v === 'custom') {
    return { w: parseFloat(document.getElementById('cw').value) || 22, h: parseFloat(document.getElementById('ch').value) || 30 };
  }
  const p = v.split('x');
  return { w: parseInt(p[0]), h: parseInt(p[1]) };
}

function addDesign() {
  const name = document.getElementById('nd-name').value.trim() || 'Design ' + (designs.length + 1);
  const w = parseFloat(document.getElementById('nd-w').value);
  const h = parseFloat(document.getElementById('nd-h').value);
  const qty = parseInt(document.getElementById('nd-qty').value);
  for (let i = 0; i < qty; i++) {
    designs.push({ id: Date.now() + i, name: qty > 1 ? name + ' #' + (i + 1) : name, w, h });
  }
  document.getElementById('nd-name').value = '';
  renderList();
  updateSheet();
  saveState();
  document.getElementById('stat-designs').textContent = designs.length;
  showToast('Added ' + qty + ' design' + (qty > 1 ? 's' : '') + ' to sheet');
}

function removeDesign(id) {
  designs = designs.filter(d => d.id !== id);
  renderList();
  updateSheet();
  saveState();
  document.getElementById('stat-designs').textContent = designs.length;
}

function renderList() {
  const el = document.getElementById('design-list');
  if (!designs.length) {
    el.innerHTML = '<p class="empty-list">No designs added yet.</p>';
    return;
  }
  el.innerHTML = designs.map(d =>
    `<div class="d-item">
      <div><div class="di-l">Name</div><div class="di-v">${escHtml(d.name)}</div></div>
      <div><div class="di-l">Size</div><div class="di-v">${d.w}" × ${d.h}"</div></div>
      <div><div class="di-l">Area</div><div class="di-v">${(d.w * d.h).toFixed(1)} sq in</div></div>
      <button class="di-rm" onclick="removeDesign(${d.id})">Remove</button>
    </div>`
  ).join('');
}

function updateSheet() {
  const { w, h } = getSheet();
  const gap = parseFloat(document.getElementById('sheet-gap').value) || 0.5;
  const SC = 11;
  const cw = Math.min(w * SC, 680);
  const sf = cw / (w * SC);
  const cv = document.getElementById('sheet-canvas');
  cv.style.width = cw + 'px';
  cv.style.height = (h * SC * sf) + 'px';
  cv.innerHTML = '';

  let cx = gap, cy = gap, rowH = 0;
  designs.forEach(d => {
    if (cx + d.w > w - gap) { cx = gap; cy += rowH; rowH = 0; }
    const el = document.createElement('div');
    el.className = 'sd-block';
    el.style.left = (cx * SC * sf) + 'px';
    el.style.top = (cy * SC * sf) + 'px';
    el.style.width = (d.w * SC * sf) + 'px';
    el.style.height = (d.h * SC * sf) + 'px';
    el.textContent = d.name.length > 18 ? d.name.substring(0, 16) + '…' : d.name;
    cv.appendChild(el);
    rowH = Math.max(rowH, d.h + gap);
    cx += d.w + gap;
  });

  const sa = w * h;
  const da = designs.reduce((a, d) => a + d.w * d.h, 0);
  const pct = sa > 0 ? Math.min(100, Math.round((da / sa) * 100)) : 0;
  document.getElementById('sum-size').textContent = w + '" × ' + h + '"';
  document.getElementById('sum-total').textContent = designs.length;
  document.getElementById('sum-area').textContent = da.toFixed(1) + ' sq in';
  document.getElementById('sum-sheet').textContent = sa.toFixed(0) + ' sq in';
  document.getElementById('sum-pct').textContent = pct + '%';
  document.getElementById('stat-fill').textContent = pct + '%';

  const msg = document.getElementById('sum-msg');
  if (!designs.length) {
    msg.className = 'sum-msg sum-ok';
    msg.textContent = 'Add designs to start planning your sheet.';
  } else if (pct > 100) {
    msg.className = 'sum-msg sum-err';
    msg.textContent = '⚠ Designs exceed sheet area — remove some or use a larger sheet.';
  } else if (pct > 85) {
    msg.className = 'sum-msg sum-warn';
    msg.textContent = '⚡ Sheet is ' + pct + '% full — almost there!';
  } else {
    msg.className = 'sum-msg sum-ok';
    msg.textContent = '✓ Sheet is ' + pct + '% filled — ' + (100 - pct) + '% remaining.';
  }
  updateSheetOutput();
}

function updateSheetOutput() {
  const { w, h } = getSheet();
  const dpi = document.getElementById('sheet-dpi').value;
  const gap = document.getElementById('sheet-gap').value;
  const da = designs.reduce((a, d) => a + d.w * d.h, 0);
  const pct = w * h > 0 ? Math.min(100, Math.round((da / (w * h)) * 100)) : 0;
  const name = (document.getElementById('design-name').value || '').trim();

  let s = 'DTF GANG SHEET PRINT BRIEF\n' + '═'.repeat(32) + '\n';
  if (name) s += 'Design name:  ' + name + '\n';
  s += 'Sheet size:   ' + w + '" × ' + h + '"\n';
  s += 'Resolution:   ' + dpi + ' DPI\n';
  s += 'Spacing:      ' + gap + '"\n';
  s += 'Format:       PNG (transparent)\n';
  s += 'Colour mode:  RGB\n\n';
  s += 'DESIGNS (' + designs.length + ')\n' + '─'.repeat(32) + '\n';
  if (designs.length) {
    designs.forEach((d, i) => s += (i + 1) + '. ' + d.name + '\n   ' + d.w + '" × ' + d.h + '" | ' + (d.w * d.h).toFixed(1) + ' sq in\n');
    s += '\nTotal area:   ' + da.toFixed(1) + ' sq in\n';
    s += 'Sheet used:   ' + pct + '%\n';
  } else {
    s += 'No designs added.\n';
  }
  s += '\nNOTES\n' + '─'.repeat(32) + '\n';
  s += '• Transparent PNG background on all designs\n';
  s += '• Min ' + gap + '" gap between designs for cutting\n';
  s += '• Confirm sheet size and orientation with printer before upload\n';
  s += '• Colour mode: RGB for DTF printing';

  document.getElementById('out-sheet').value = s;
}

function clearSheet() {
  if (designs.length && !confirm('Clear all designs from sheet?')) return;
  designs = [];
  renderList();
  updateSheet();
  saveState();
  document.getElementById('stat-designs').textContent = 0;
  showToast('Sheet cleared');
}

/* ─── VINTAGE HALFTONE ENGINE ─── */
const VH_DATA = {
  halftoneType: {
    options: [
      {id:"dot",       label:"Dot halftone",       hint:"Circular dot matrix pattern — the classic screen-print halftone",      prompt:"dot halftone shading with circular dot matrix pattern"},
      {id:"line",      label:"Line halftone",       hint:"Parallel ruling lines — engraving-style halftone texture",             prompt:"line halftone shading with parallel ruling lines"},
      {id:"stipple",   label:"Stipple halftone",    hint:"Hand-drawn dot texture — organic and tactile feel",                   prompt:"stipple halftone shading with hand-drawn dot texture"},
      {id:"engraved",  label:"Engraved halftone",   hint:"Crosshatch etching — woodcut and letterpress inspired",               prompt:"engraved halftone shading with crosshatch etching texture"},
      {id:"newspaper", label:"Newspaper bitmap",    hint:"Coarse offset print texture — raw and gritty newsprint look",         prompt:"newspaper bitmap halftone with coarse offset print texture"},
    ]
  },
  distressLevel: {
    options: [
      {id:"clean",  label:"Clean",                   hint:"Sharp, fresh print — no wear or aging",                                   prompt:"clean crisp screen-print"},
      {id:"light",  label:"Light distress",           hint:"Subtle wear marks — freshly broken-in feel",                            prompt:"lightly distressed with subtle wear marks and soft edge fading"},
      {id:"medium", label:"Medium vintage distress",  hint:"Faded edges, subtle print breakdown and aging texture",                 prompt:"medium vintage distress with faded edges, print breakdown and aged texture"},
      {id:"heavy",  label:"Heavy worn tee distress",  hint:"Cracked ink, heavy aging — well-loved vintage tee",                    prompt:"heavily distressed worn tee look with ink cracking, severe aging and heavy print wear"},
    ]
  },
  inkFeel: {
    options: [
      {id:"soft",    label:"Soft washed ink",        hint:"Gentle faded look — lightweight fashion feel",                          prompt:"soft washed ink feel, gentle faded print with translucent ink quality"},
      {id:"cracked", label:"Cracked vintage ink",    hint:"Visible ink breakdown — aged and well-worn",                            prompt:"cracked vintage ink with visible ink breakdown and crazing"},
      {id:"faded",   label:"Faded poster ink",       hint:"Subtle bleed and bleed — bleached-out poster aesthetic",               prompt:"faded poster-style ink with subtle bleed and colour loss"},
      {id:"heavy",   label:"Heavy screen print ink", hint:"Bold and opaque — maximum ink coverage",                               prompt:"heavy bold screen-print ink with solid coverage and thick ink deposit"},
    ]
  },
  garmentTarget: {
    options: [
      {id:"black",    label:"Black shirt",     hint:"Black shirt — dark garment ready, high contrast artwork",        prompt:"designed for black garment, dark garment ready, artwork with strong light values",    bg:"#111111"},
      {id:"charcoal", label:"Charcoal shirt",  hint:"Charcoal shirt — dark base, slightly softer contrast",           prompt:"designed for charcoal garment, dark garment ready, high contrast light tones",        bg:"#444444"},
      {id:"white",    label:"White shirt",     hint:"White shirt — light base, full colour range available",           prompt:"designed for white garment, light garment, full colour saturation",                  bg:"#EFEFEF"},
      {id:"cream",    label:"Cream shirt",     hint:"Cream or off-white — warm base tone, earthy palette feel",       prompt:"designed for cream or off-white garment, warm garment tone, earthy palette",          bg:"#f5ead8"},
      {id:"colored",  label:"Colored garment", hint:"Bold coloured base — design must contrast strongly",             prompt:"designed for coloured garment, artwork with strong contrast and bold outlines",        bg:"#1565C0"},
    ]
  },
  colorMode: {
    options: [
      {id:"sepia",     label:"Sepia gold",          hint:"Warm aged brown tones — aged paper and sepia gold",                      prompt:"sepia gold and aged brown colour palette, warm vintage tones, antique ink feel"},
      {id:"cream",     label:"Cream and black",      hint:"Stark two-tone contrast — clean and timeless",                         prompt:"cream and black two-tone colour palette, stark graphic contrast"},
      {id:"mono",      label:"Faded monochrome",     hint:"Muted grayscale — bleached-out classic look",                          prompt:"faded monochrome grayscale palette with muted washed tones"},
      {id:"redcream",  label:"Washed red and cream", hint:"Vintage sports and band tee palette",                                   prompt:"washed red and cream colour palette, vintage sports and concert tee feel"},
      {id:"charcoal",  label:"Charcoal and bone",    hint:"Dark and moody with bone white accents",                               prompt:"charcoal and bone white colour palette, muted dark contrast"},
      {id:"fullcolor", label:"Vintage full color",   hint:"Full palette with muted, washed-out vintage shift",                    prompt:"vintage full colour palette with muted washed-out tones and aged colour shift"},
    ]
  },
};

let vhState = {
  halftoneType:  "dot",
  distressLevel: "medium",
  inkFeel:       "soft",
  garmentTarget: "black",
  colorMode:     "sepia",
  subject:       "",
};

function getVHOpt(category, id) {
  return VH_DATA[category].options.find(o => o.id === id) || VH_DATA[category].options[0];
}

function generateVintagePrompt() {
  const ht  = getVHOpt('halftoneType',  vhState.halftoneType);
  const dl  = getVHOpt('distressLevel', vhState.distressLevel);
  const ink = getVHOpt('inkFeel',       vhState.inkFeel);
  const gt  = getVHOpt('garmentTarget', vhState.garmentTarget);
  const cm  = getVHOpt('colorMode',     vhState.colorMode);
  const subj = vhState.subject.trim();

  const parts = [
    "vintage screen-print style illustration",
    ...(subj ? [subj] : []),
    ht.prompt,
    dl.prompt,
    ink.prompt,
    cm.prompt,
    gt.prompt,
    "high contrast vintage poster-style artwork",
    "distressed bitmap texture throughout",
    "vintage concert tee graphic composition",
    "centered chest print composition",
    "soft ink look not a hard sticker",
    "transparent background PNG",
    "DTF print ready",
    "300 DPI",
    "clean edges",
    "no blur",
    "no watermark",
  ];

  return parts.join(", ") + ".";
}

function setVH(category, value) {
  vhState[category] = value;

  const group = document.getElementById('vhg-' + category);
  if (group) {
    group.querySelectorAll('.vh-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.val === value);
    });
  }

  const opt = getVHOpt(category, value);

  const hint = document.getElementById('vh-hint-' + category);
  if (hint) hint.textContent = opt.hint || '';

  if (category === 'garmentTarget') {
    const shirt = document.getElementById('vh-shirt-body');
    if (shirt) shirt.setAttribute('fill', opt.bg);
    const lbl = document.getElementById('vh-garment-label');
    if (lbl) lbl.textContent = opt.label;
  }

  const out = document.getElementById('vh-prompt-out');
  if (out) out.value = generateVintagePrompt();

  updateVHTags();
}

function onVHSubject(v) {
  vhState.subject = v;
  const out = document.getElementById('vh-prompt-out');
  if (out) out.value = generateVintagePrompt();
}

function updateVHTags() {
  const el = document.getElementById('vh-tags');
  if (!el) return;
  const cats = ['halftoneType','distressLevel','inkFeel','garmentTarget','colorMode'];
  const tags = cats.map(cat => {
    const opt = getVHOpt(cat, vhState[cat]);
    return `<span class="vh-tag">${escHtml(opt.label)}</span>`;
  }).join('');
  el.innerHTML = tags;
}

function copyVHPrompt() {
  const t = document.getElementById('vh-prompt-out').value;
  if (!t) { showToast('Generate a prompt first'); return; }
  navigator.clipboard.writeText(t).then(() => showToast('Vintage prompt copied ✓'));
}

function downloadVHPrompt() {
  const t = document.getElementById('vh-prompt-out').value;
  dlTxt(t, 'vintage-halftone-prompt.txt');
}

function initVintageTab() {
  const out = document.getElementById('vh-prompt-out');
  if (out) out.value = generateVintagePrompt();
  updateVHTags();
}

/* ─── FACE WIPE SPF 70 ENGINE ─── */
const FW_DATA = {
  skinType: {
    options: [
      {id:"all",         label:"All skin types",    hint:"Inclusive formulation — works for every skin type",                                              prompt:"formulated for all skin types including oily, dry, combination, sensitive and mature skin"},
      {id:"oily",        label:"Oily skin",          hint:"Controls excess sebum while providing SPF 70 protection",                                       prompt:"specifically designed for oily and acne-prone skin — mattifying SPF 70 formula"},
      {id:"dry",         label:"Dry skin",           hint:"Deeply hydrating wipe formula with SPF 70 protection",                                         prompt:"enriched moisturising SPF 70 formula for dry and dehydrated skin"},
      {id:"combination", label:"Combination skin",   hint:"Balances T-zone and dry areas while protecting with SPF 70",                                   prompt:"balancing SPF 70 formula for combination skin — mattifies oily zones while hydrating dry areas"},
      {id:"sensitive",   label:"Sensitive skin",     hint:"Gentle, fragrance-free formula with SPF 70 for reactive skin",                                 prompt:"ultra-gentle hypoallergenic SPF 70 formula for sensitive and reactive skin — fragrance-free and dermatologist tested"},
      {id:"mature",      label:"Mature skin",        hint:"Anti-ageing SPF 70 formula for mature and fine-lined skin",                                    prompt:"anti-ageing SPF 70 formula for mature skin — targets fine lines and age spots while providing broad spectrum protection"},
    ]
  },
  skinTexture: {
    options: [
      {id:"all",      label:"All textures",          hint:"Effective across all skin textures — no exceptions",                                            prompt:"effective on all skin textures — smooth, textured, dewy, uneven and rough"},
      {id:"smooth",   label:"Smooth & even",          hint:"Glides effortlessly on smooth skin for invisible SPF protection",                              prompt:"designed for smooth even skin — leaves an invisible weightless SPF 70 finish"},
      {id:"dewy",     label:"Dewy & glowing",         hint:"Enhances natural glow while locking in SPF 70 protection",                                    prompt:"enhances dewy glowing skin — luminous finish with SPF 70 sun protection"},
      {id:"textured", label:"Textured / pores",       hint:"Penetrates and works with visible pores and textured skin",                                   prompt:"works effectively on textured and porous skin — smooths while delivering SPF 70 protection"},
      {id:"uneven",   label:"Uneven / patchy",        hint:"Evens out patchy areas and provides consistent SPF 70 coverage",                              prompt:"corrects uneven patchy skin tone while delivering consistent SPF 70 coverage across the face"},
      {id:"rough",    label:"Rough / dry patches",    hint:"Softens rough dry patches while providing SPF 70 protection",                                 prompt:"gently softens rough dry patches while providing broad-spectrum SPF 70 protection"},
    ]
  },
  designStyle: {
    options: [
      {id:"clean",    label:"Clean minimalist",       hint:"Clean, modern packaging with sleek white and minimal typography",                              prompt:"clean minimalist product design — sleek white packaging, modern sans-serif typography, airy and clinical aesthetic"},
      {id:"luxury",   label:"Luxury skincare",        hint:"Premium gold and white packaging — high-end skincare positioning",                            prompt:"luxury skincare packaging design — premium gold and ivory tones, elegant serif typography, high-end prestige aesthetic"},
      {id:"natural",  label:"Natural & organic",      hint:"Earth tones, botanical elements — clean and eco-friendly feel",                               prompt:"natural organic skincare design — earthy tones, botanical leaf and plant motifs, eco-friendly and clean beauty aesthetic"},
      {id:"clinical", label:"Clinical / dermatological", hint:"Scientific and medical — white coat credibility and trust",                                prompt:"clinical dermatological design — medical white, precision typography, science-backed trust aesthetic with SPF data visualisation"},
      {id:"vibrant",  label:"Vibrant & bold",         hint:"Bright pops of colour — energetic and eye-catching shelf presence",                          prompt:"vibrant bold packaging design — electric colour pops, strong geometric shapes, high energy and eye-catching shelf presence"},
      {id:"soft",     label:"Soft & feminine",        hint:"Blush pinks, soft lilacs — gentle and approachable beauty brand",                            prompt:"soft feminine packaging design — blush pink, lilac and peach tones, rounded organic shapes, gentle approachable beauty aesthetic"},
    ]
  },
  spfEmphasis: {
    options: [
      {id:"shield",  label:"Bold UV shield",          hint:"Prominent SPF 70 badge — bold sun protection shield graphic",                                 prompt:"prominent bold SPF 70 UV shield badge — sun protection is the hero message, shield and sun ray graphic motifs"},
      {id:"subtle",  label:"Subtle protection",       hint:"SPF 70 quietly integrated — skincare first, sun protection second",                          prompt:"subtle SPF 70 integration — protection message is secondary, clean skincare-first visual language"},
      {id:"derm",    label:"Dermatologist recommended", hint:"Trust signals and clinical authority — doctor-endorsed SPF",                               prompt:"dermatologist recommended SPF 70 — clinical trust badges, doctor endorsement seals, safety credentials on packaging"},
      {id:"outdoor", label:"Beach & outdoor",         hint:"Sun, sand and water — active outdoor lifestyle with SPF 70",                                 prompt:"beach and outdoor lifestyle SPF 70 — sun rays, ocean waves, active outdoor energy, water resistance messaging"},
      {id:"daily",   label:"Everyday wear",           hint:"Morning routine hero — SPF 70 as a daily skincare essential",                                prompt:"everyday daily-wear SPF 70 — morning skincare routine positioning, soft lifestyle aesthetic, consistent daily protection messaging"},
    ]
  },
  skinTone: {
    options: [
      {id:"diverse",  label:"Diverse skin tones",     hint:"Inclusive representation across all skin tones and ethnicities",                              prompt:"diverse inclusive skin tone representation — models spanning fair through deep skin tones, celebrating all ethnicities"},
      {id:"fair",     label:"Fair / light",            hint:"Fair and light skin tone focus — pink and ivory complexions",                                prompt:"fair and light skin tone representation — ivory and pink complexions, blue eyes and natural hair diversity"},
      {id:"medium",   label:"Medium / tan",            hint:"Medium and tan skin tones — golden and warm complexions",                                    prompt:"medium and tan skin tone representation — golden warm complexions, natural sun-kissed appearance"},
      {id:"olive",    label:"Olive / brown",           hint:"Olive and brown skin — Mediterranean, South Asian and Latin complexions",                   prompt:"olive and brown skin tone representation — Mediterranean, South Asian and Latin complexion diversity"},
      {id:"deep",     label:"Deep / dark",             hint:"Deep and dark skin tones — rich and melanin-rich complexions",                              prompt:"deep and dark skin tone representation — rich melanin-rich complexions, African and African-diaspora beauty"},
      {id:"abstract", label:"No model / abstract",    hint:"Product-only or abstract visual — no human skin shown",                                     prompt:"product-only and abstract visual — no human models, focus on the product, ingredients and abstract SPF UV shield motifs"},
    ]
  },
  colorPalette: {
    options: [
      {id:"white-blue",  label:"Clean white & sky blue",  hint:"Fresh white and sky blue — clean clinical feel with summer UV energy",                   prompt:"clean white and sky blue colour palette — crisp, fresh, clinical and summer-ready"},
      {id:"earthy",      label:"Earthy naturals",          hint:"Warm beiges, tans and greens — organic and natural brand feel",                         prompt:"earthy natural colour palette — warm beige, nude, tan and moss green tones, organic and clean beauty"},
      {id:"vibrant",     label:"Bold vibrant pop",         hint:"Electric blues, yellows and corals — bold shelf-stopping energy",                       prompt:"bold vibrant pop colour palette — electric blue, sunshine yellow and coral, high energy shelf presence"},
      {id:"pastels",     label:"Soft pastels",             hint:"Blush, lavender and mint — gentle and approachable palette",                            prompt:"soft pastel colour palette — blush pink, lavender, mint green and sky blue, gentle and approachable beauty"},
      {id:"clinical",    label:"Clinical white & grey",    hint:"Pure white and silver — clinical precision and trust",                                  prompt:"clinical white and silver grey colour palette — medical precision, sterile and trustworthy dermatological brand aesthetic"},
      {id:"gold-luxury", label:"Gold luxury",              hint:"Gold, ivory and deep navy — premium luxury skincare positioning",                       prompt:"luxury gold and ivory colour palette with deep navy accents — premium high-end skincare brand aesthetic"},
    ]
  },
};

let fwState = {
  skinType:    "all",
  skinTexture: "all",
  designStyle: "clean",
  spfEmphasis: "shield",
  skinTone:    "diverse",
  colorPalette:"white-blue",
  subject:     "",
};

const SKIN_TONE_COLORS = {
  diverse:  ["#f5c9a8","#d4956a","#c07040","#8b4513","#5c2a0e","#3a1a08"],
  fair:     ["#fde8d8","#f5cbb0","#e8b898","#d4a080"],
  medium:   ["#d4956a","#c07848","#a86030","#8b4820"],
  olive:    ["#c09060","#a07040","#8b5830","#6b4020"],
  deep:     ["#8b4513","#6b3010","#4a1e08","#3a1408"],
  abstract: [],
};

function getFWOpt(category, id) {
  return FW_DATA[category].options.find(o => o.id === id) || FW_DATA[category].options[0];
}

function generateFWPrompt() {
  const st  = getFWOpt('skinType',    fwState.skinType);
  const stx = getFWOpt('skinTexture', fwState.skinTexture);
  const ds  = getFWOpt('designStyle', fwState.designStyle);
  const se  = getFWOpt('spfEmphasis', fwState.spfEmphasis);
  const tn  = getFWOpt('skinTone',    fwState.skinTone);
  const cp  = getFWOpt('colorPalette',fwState.colorPalette);
  const subj = fwState.subject.trim();

  const parts = [
    "SPF 70 face wipe product design",
    ...(subj ? [subj] : []),
    st.prompt,
    stx.prompt,
    ds.prompt,
    se.prompt,
    tn.prompt,
    cp.prompt,
    "broad spectrum UVA and UVB protection",
    "SPF 70 clearly displayed on packaging",
    "refreshing cleansing wipe",
    "dermatologically tested",
    "photorealistic product render or lifestyle photography",
    "transparent background PNG",
    "300 DPI print ready",
    "no watermark",
  ];

  return parts.join(", ") + ".";
}

function setFW(category, value) {
  fwState[category] = value;

  const group = document.getElementById('fwg-' + category);
  if (group) {
    group.querySelectorAll('.vh-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.val === value);
    });
  }

  const opt = getFWOpt(category, value);
  const hint = document.getElementById('fw-hint-' + category);
  if (hint) hint.textContent = opt.hint || '';

  const out = document.getElementById('fw-prompt-out');
  if (out) out.value = generateFWPrompt();

  updateFWTags();
  updateFWPreview();
}

function onFWSubject(v) {
  fwState.subject = v;
  const out = document.getElementById('fw-prompt-out');
  if (out) out.value = generateFWPrompt();
}

function updateFWTags() {
  const el = document.getElementById('fw-tags');
  if (!el) return;
  const cats = ['skinType','skinTexture','designStyle','spfEmphasis','skinTone','colorPalette'];
  const tags = cats.map(cat => {
    const opt = getFWOpt(cat, fwState[cat]);
    return `<span class="vh-tag">${escHtml(opt.label)}</span>`;
  }).join('');
  el.innerHTML = tags;
}

function updateFWPreview() {
  const dotsEl = document.getElementById('fw-skin-dots');
  if (!dotsEl) return;
  const colors = SKIN_TONE_COLORS[fwState.skinTone] || SKIN_TONE_COLORS.diverse;
  if (!colors.length) {
    dotsEl.innerHTML = '<div style="font-size:9px;color:rgba(26,74,112,0.6);text-align:center;width:100%">Product only</div>';
  } else {
    dotsEl.innerHTML = colors.map(c =>
      `<div class="fw-skin-dot" style="background:${c}"></div>`
    ).join('');
  }
  const lbl = document.getElementById('fw-allskin-label');
  if (lbl) {
    lbl.textContent = fwState.skinType === 'all'
      ? 'For All Skin Types & Textures'
      : getFWOpt('skinType', fwState.skinType).label + ' · SPF 70';
  }
}

function copyFWPrompt() {
  const t = document.getElementById('fw-prompt-out').value;
  if (!t) { showToast('Generate a prompt first'); return; }
  navigator.clipboard.writeText(t).then(() => showToast('SPF 70 prompt copied ✓'));
}

function downloadFWPrompt() {
  const t = document.getElementById('fw-prompt-out').value;
  dlTxt(t, 'face-wipe-spf70-prompt.txt');
}

function initFaceWipeTab() {
  const out = document.getElementById('fw-prompt-out');
  if (out) out.value = generateFWPrompt();
  updateFWTags();
  updateFWPreview();
}

/* ─── NAVIGATION ─── */
function switchTab(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  const idx = ['builder', 'planner', 'output', 'vintage', 'halftone', 'facewipe'].indexOf(name);
  if (idx >= 0) document.querySelectorAll('.nav-tab')[idx].classList.add('active');
  if (name === 'output') updateSheetOutput();
  if (name === 'vintage') initVintageTab();
  if (name === 'facewipe') initFaceWipeTab();
  if (name === 'halftone') {
    if (typeof HalftoneProcessor !== 'undefined') HalftoneProcessor.init();
  }
}

/* ─── TOAST ─── */
function showToast(msg) {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  container.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 350);
  }, 2600);
}

/* ─── UTILS ─── */
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s) { return String(s).replace(/"/g,'&quot;'); }

/* ─── INIT ─── */
loadSavedState();
buildForm();
updateSel();
updateSheet();
renderList();
renderHistory();
updateStatPrompts();
buildSwatches();
updateMockup();
buildPresets();
document.getElementById('stat-designs').textContent = designs.length;
