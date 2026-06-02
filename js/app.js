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
      "tattoo flash art","ukiyo-e woodblock style","Baroque portrait style"
    ]},
    {id:"finish", label:"ART FINISH", pk:"finish", options:[
      "high gloss illustration","soft airbrushed shine","cell-shaded gloss",
      "ultra polished digital paint","candy-coated finish","silky poster finish",
      "glossy","warm earth tone wash","golden hour cinematic",
      "matte fine art finish","dramatic contrast finish","neon pop art finish",
      "metallic sheen finish","holographic glow","vintage faded finish",
      "high contrast ink finish","smooth vector clean finish"
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

function onSel(id, v) { state[id].value = v; updateSel(); saveState(); }
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

/* ─── NAVIGATION ─── */
function switchTab(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  const idx = ['builder', 'planner', 'output'].indexOf(name);
  document.querySelectorAll('.nav-tab')[idx].classList.add('active');
  if (name === 'output') updateSheetOutput();
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
document.getElementById('stat-designs').textContent = designs.length;
