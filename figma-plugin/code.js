// Internee.pk LMS Dashboard — Figma generator
// Run inside a blank Figma file: Plugins > Development > Import plugin from manifest…
// Builds an interactive prototype (Dashboard + Course page, Light + Dark) using
// Auto Layout, component variants, hover interactions and Smart Animate theme switching.

// ---------------------------------------------------------------- tokens

const THEMES = {
  Light: { bg: '#F7F6F2', surface: '#FFFFFF', surface2: '#F3F1EC', text: '#0F0E1A', muted: '#67645E', border: '#E6E3DC', brand: '#5B3DF5', brandSoft: '#F1EEFF', brandText: '#4628D8', track: '#ECEAE4', toggleOn: '#5B3DF5', toggleIcon: '#FFFFFF', coralChip: '#FFE6DF', coralIcon: '#C7432A', limeChip: '#F3FDD0', limeIcon: '#5C7410', chipOn: '#0F0E1A', chipOnText: '#F7F6F2', goal: '#0F0E1A' },
  Dark: { bg: '#0B0A14', surface: '#15141F', surface2: '#1C1B29', text: '#F7F6F2', muted: '#A09CB0', border: '#262438', brand: '#7E66F8', brandSoft: '#221B4D', brandText: '#C5B8FF', track: '#262438', toggleOn: '#C6F432', toggleIcon: '#0F0E1A', coralChip: '#3A1E19', coralIcon: '#FFAA96', limeChip: '#283010', limeIcon: '#C6F432', chipOn: '#F7F6F2', chipOnText: '#0B0A14', goal: '#221B4D' },
};
const BRAND = { violet: '#5B3DF5', lime: '#C6F432', ink: '#0F0E1A', paper: '#F7F6F2', coral: '#FF6B4A', success: '#1FA971', star: '#F5A524', white: '#FFFFFF' };

const STYLES = {}; // 'Light/bg' | 'Brand/violet' -> PaintStyle
const TEXT = {
  greeting: ['display-bold', 30, 36, -2], hero: ['display-bold', 34, 38, -2], h2: ['display-bold', 21, 26, -2], h3: ['display-bold', 17, 22, -2],
  card: ['display-bold', 18, 23, -2], stat: ['display-bold', 30, 34, -3], ring: ['display-bold', 26, 30, -2],
  body: ['body-regular', 15, 22, 0], bodyMed: ['body-medium', 15, 22, 0], small: ['body-regular', 13, 18, 0], smallStrong: ['body-semibold', 13, 18, 0],
  caption: ['body-semibold', 12, 16, 0], button: ['body-semibold', 14, 18, 0], eyebrow: ['display-bold', 12, 16, 12, true],
};
const TEXT_STYLES = {};
const FONT_CANDIDATES = {
  'display-bold': [['Space Grotesk', 'Bold'], ['Inter', 'Bold']],
  'body-regular': [['Inter', 'Regular']],
  'body-medium': [['Inter', 'Medium'], ['Inter', 'Regular']],
  'body-semibold': [['Inter', 'Semi Bold'], ['Inter', 'SemiBold'], ['Inter', 'Medium']],
};
const FONT = {};

// ---------------------------------------------------------------- content

const COURSES = [
  { id: 'ui-ux', title: 'UI/UX Design Fundamentals', cat: 'Design', icon: 'pen', bg: BRAND.violet, fg: BRAND.lime, done: 18, total: 25, left: '6h 10m left', next: 'Lesson 19 · Prototyping in Figma' },
  { id: 'react', title: 'React for Beginners', cat: 'Development', icon: 'code', bg: BRAND.ink, fg: BRAND.lime, done: 9, total: 20, left: '9h 30m left', next: 'Lesson 10 · State & hooks' },
  { id: 'python', title: 'Python for Data Science', cat: 'Data', icon: 'chart', bg: BRAND.lime, fg: BRAND.ink, done: 22, total: 25, left: '1h 45m left', next: 'Lesson 23 · Visualising with Matplotlib' },
  { id: 'marketing', title: 'Digital Marketing Essentials', cat: 'Marketing', icon: 'mega', bg: BRAND.coral, fg: BRAND.ink, done: 3, total: 15, left: '8h 20m left', next: 'Lesson 4 · Writing for social' },
];
const RECS = [
  { title: 'Figma Auto Layout Masterclass', why: 'Next step after UI/UX Fundamentals', match: 96, len: '2h 40m', learners: '3.2k', rating: '4.9', c: [BRAND.violet, BRAND.lime, '#7E66F8'] },
  { title: 'Accessibility for Designers', why: 'Matches your goal: Product Designer', match: 91, len: '1h 55m', learners: '1.8k', rating: '4.8', c: [BRAND.ink, BRAND.violet, BRAND.lime] },
  { title: 'TypeScript Essentials', why: 'Pairs well with React for Beginners', match: 88, len: '3h 10m', learners: '2.4k', rating: '4.7', c: [BRAND.lime, BRAND.ink, BRAND.violet] },
];
const WEEK = [['Mon', 1.5], ['Tue', 2], ['Wed', 0.5], ['Thu', 3], ['Fri', 2.5], ['Sat', 1], ['Sun', 2]];
const DEADLINES = [['27', 'OCT', 'Wireframe assignment', 'UI/UX Design Fundamentals', 'Tomorrow', true], ['29', 'OCT', 'Quiz 3: React hooks', 'React for Beginners', '3 days'], ['31', 'OCT', 'Capstone draft', 'Python for Data Science', '5 days']];
const MODULES = [['Design thinking', 'done'], ['Wireframing', 'done'], ['Visual hierarchy', 'done'], ['Prototyping in Figma', 'now'], ['Usability testing', 'lock'], ['Capstone: redesign an app', 'lock']];

const ICON_SVG = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  star: '<path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
  sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  bell: '<path d="M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  flame: '<path d="M12 22c4 0 7-2.8 7-6.8 0-3.5-2.4-5.6-4-8.2-.6 2-1.6 3-3 3.5C12.5 7 11 4.5 8.5 2.5 8.6 6 5 8.6 5 13.6 5 18.8 8 22 12 22z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  right: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M18 14a6 6 0 0 1 4 7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
  chart: '<path d="M3 3v18h18M7 15v2M11 11v6M15 7v10M19 12v5"/>',
  mega: '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1zM17 8a5 5 0 0 1 0 8M20 5a9 9 0 0 1 0 14"/>',
};
const ICONS = {};
const COMP = {}; // COMP[name][key] = ComponentNode

// ---------------------------------------------------------------- helpers

function rgb(h) { h = h.replace('#', ''); return { r: parseInt(h.slice(0, 2), 16) / 255, g: parseInt(h.slice(2, 4), 16) / 255, b: parseInt(h.slice(4, 6), 16) / 255 }; }
function solid(h, o) { return { type: 'SOLID', color: rgb(h), opacity: o === undefined ? 1 : o }; }
// key: 'Light.bg' | 'Dark.surface' | 'violet'
function hexOf(key) { const p = key.split('.'); return p.length === 2 ? THEMES[p[0]][p[1]] : BRAND[key]; }
function styleOf(key) { const p = key.split('.'); return STYLES[p.length === 2 ? p[0] + '/' + p[1] : 'Brand/' + key]; }
async function paint(node, key, opacity) {
  if (opacity !== undefined && opacity < 1) { node.fills = [solid(hexOf(key), opacity)]; return; }
  node.fills = [solid(hexOf(key))];
  const s = styleOf(key);
  if (s) await node.setFillStyleIdAsync(s.id);
}
async function stroke(node, key, w) {
  node.strokes = [solid(hexOf(key))];
  node.strokeWeight = w || 1;
  node.strokeAlign = 'INSIDE';
  const s = styleOf(key);
  if (s) await node.setStrokeStyleIdAsync(s.id);
}
function shadow(strong) {
  return strong
    ? [{ type: 'DROP_SHADOW', color: { r: 0.06, g: 0.05, b: 0.1, a: 0.14 }, offset: { x: 0, y: 16 }, radius: 32, spread: 0, visible: true, blendMode: 'NORMAL' }]
    : [{ type: 'DROP_SHADOW', color: { r: 0.06, g: 0.05, b: 0.1, a: 0.06 }, offset: { x: 0, y: 8 }, radius: 24, spread: 0, visible: true, blendMode: 'NORMAL' }];
}

function setupAL(f, dir, o) {
  o = o || {};
  const pad = o.pad === undefined ? [0, 0, 0, 0] : (typeof o.pad === 'number' ? [o.pad, o.pad, o.pad, o.pad] : o.pad);
  f.layoutMode = dir;
  f.itemSpacing = o.gap || 0;
  f.paddingTop = pad[0]; f.paddingRight = pad[1]; f.paddingBottom = pad[2]; f.paddingLeft = pad[3];
  f.counterAxisAlignItems = o.align || (dir === 'HORIZONTAL' ? 'CENTER' : 'MIN');
  f.primaryAxisAlignItems = o.main || 'MIN';
  if (o.w) { f.resize(o.w, f.height); f.layoutSizingHorizontal = 'FIXED'; } else f.layoutSizingHorizontal = 'HUG';
  if (o.h) { f.resize(f.width, o.h); f.layoutSizingVertical = 'FIXED'; } else f.layoutSizingVertical = 'HUG';
  if (o.r) f.cornerRadius = o.r;
  if (o.name) f.name = o.name;
  f.clipsContent = !!o.clip;
}
async function al(parent, dir, o) {
  o = o || {};
  const f = figma.createFrame();
  parent.appendChild(f);
  setupAL(f, dir, o);
  if (o.fill) await paint(f, o.fill, o.opacity); else f.fills = [];
  if (o.stroke) await stroke(f, o.stroke, o.sw);
  if (o.grow) grow(f);
  if (o.stretch) f.layoutSizingHorizontal = 'FILL';
  return f;
}
function grow(n) { n.layoutGrow = 1; return n; }
function fillW(n) { n.layoutSizingHorizontal = 'FILL'; return n; }

async function txt(parent, str, styleKey, colorKey, o) {
  o = o || {};
  const s = TEXT[styleKey];
  const t = figma.createText();
  t.fontName = FONT[s[0]];
  t.characters = str;
  t.fontSize = s[1];
  t.lineHeight = { value: s[2], unit: 'PIXELS' };
  t.letterSpacing = { value: s[3], unit: 'PERCENT' };
  if (s[4]) t.textCase = 'UPPER';
  parent.appendChild(t);
  if (TEXT_STYLES[styleKey]) await t.setTextStyleIdAsync(TEXT_STYLES[styleKey].id);
  await paint(t, colorKey);
  if (o.name) t.name = o.name;
  if (o.fill) fillW(t);
  if (o.align) t.textAlignHorizontal = o.align;
  return t;
}

function icon(parent, name, size, colorHex) {
  const inst = ICONS[name].createInstance();
  parent.appendChild(inst);
  if (size && size !== 24) inst.rescale(size / 24);
  if (colorHex) tint(inst, colorHex);
  return inst;
}
function tint(node, hex) {
  node.findAll(n => n.type === 'VECTOR' || n.type === 'ELLIPSE' || n.type === 'RECTANGLE').forEach(v => {
    if (v.strokes && v.strokes.length) v.strokes = [solid(hex)];
    if (v.fills && v.fills.length) v.fills = [solid(hex)];
  });
}
function swapIcon(inst, name, hex) { inst.swapComponent(ICONS[name]); if (hex) tint(inst, hex); }
function find(root, name) { return root.findOne(n => n.name === name); }
function setText(root, name, str) { const t = find(root, name); if (t) t.characters = str; return t; }

async function spacer(parent) { const s = await al(parent, 'HORIZONTAL', { name: 'Spacer' }); grow(s); return s; }

async function ring(parent, p, size, trackKey, progKey, labelKey) {
  const f = figma.createFrame();
  parent.appendChild(f);
  f.name = 'Progress Ring';
  f.resize(size, size);
  f.fills = [];
  const track = figma.createEllipse(); f.appendChild(track); track.resize(size, size); track.name = 'Ring Track';
  track.arcData = { startingAngle: 0, endingAngle: 2 * Math.PI, innerRadius: 0.8 };
  await paint(track, trackKey.key, trackKey.opacity);
  const arc = figma.createEllipse(); f.appendChild(arc); arc.resize(size, size); arc.name = 'Ring Progress';
  arc.arcData = { startingAngle: -Math.PI / 2, endingAngle: -Math.PI / 2 + 2 * Math.PI * p / 100, innerRadius: 0.8 };
  await paint(arc, progKey);
  const t = await txt(f, p + '%', 'ring', labelKey, { name: 'Ring Label' });
  if (size > 120) t.fontSize = 34;
  t.textAlignHorizontal = 'CENTER';
  t.resize(size, t.height);
  t.x = 0; t.y = (size - t.height) / 2;
  return f;
}

async function progressBar(parent, theme, p, w) {
  const track = figma.createFrame();
  parent.appendChild(track);
  track.name = 'Track';
  track.resize(w || 200, 8);
  track.cornerRadius = 999;
  track.clipsContent = true;
  await paint(track, theme + '.track');
  const fill = figma.createRectangle();
  track.appendChild(fill);
  fill.name = 'Fill';
  fill.resize(Math.max(4, (w || 200) * p / 100), 8);
  fill.cornerRadius = 999;
  await paint(fill, theme + '.brand');
  return track;
}

async function react(node, trigger, destId, navigation, ms) {
  const action = { type: 'NODE', destinationId: destId, navigation, transition: { type: 'SMART_ANIMATE', easing: { type: 'EASE_OUT' }, duration: (ms || 300) / 1000 }, preserveScrollPosition: false, resetVideoPosition: false };
  try { await node.setReactionsAsync([{ trigger: { type: trigger }, actions: [action] }]); }
  catch (e) {
    try { await node.setReactionsAsync([{ trigger: { type: trigger }, action }]); }
    catch (e2) { console.warn('Reaction skipped on ' + node.name, e2); }
  }
}

// ---------------------------------------------------------------- setup

async function loadFonts() {
  for (const key in FONT_CANDIDATES) {
    const list = FONT_CANDIDATES[key].concat([['Inter', 'Regular'], ['Roboto', 'Regular']]);
    for (const c of list) {
      try { await figma.loadFontAsync({ family: c[0], style: c[1] }); FONT[key] = { family: c[0], style: c[1] }; break; } catch (e) { /* next */ }
    }
    if (!FONT[key]) throw new Error('No font available for ' + key);
  }
}

function createStyles() {
  for (const th of ['Light', 'Dark']) {
    for (const k in THEMES[th]) {
      const s = figma.createPaintStyle();
      s.name = th + '/' + k;
      s.paints = [solid(THEMES[th][k])];
      STYLES[th + '/' + k] = s;
    }
  }
  for (const k in BRAND) {
    const s = figma.createPaintStyle();
    s.name = 'Brand/' + k;
    s.paints = [solid(BRAND[k])];
    STYLES['Brand/' + k] = s;
  }
  const names = { greeting: 'Heading/Greeting', hero: 'Heading/Hero', h2: 'Heading/Section', h3: 'Heading/Card', card: 'Heading/Card Large', stat: 'Data/Stat', ring: 'Data/Ring', body: 'Body/Regular', bodyMed: 'Body/Medium', small: 'Body/Small', smallStrong: 'Body/Small Strong', caption: 'Label/Caption', button: 'Label/Button', eyebrow: 'Label/Eyebrow' };
  for (const k in TEXT) {
    const t = TEXT[k];
    const s = figma.createTextStyle();
    s.name = names[k];
    s.fontName = FONT[t[0]];
    s.fontSize = t[1];
    s.lineHeight = { value: t[2], unit: 'PIXELS' };
    s.letterSpacing = { value: t[3], unit: 'PERCENT' };
    if (t[4]) s.textCase = 'UPPER';
    TEXT_STYLES[k] = s;
  }
}

async function createVariables() {
  try {
    const col = figma.variables.createVariableCollection('LMS Theme');
    const light = col.modes[0].modeId;
    col.renameMode(light, 'Light');
    let dark = null;
    try { dark = col.addMode('Dark'); } catch (e) { /* free plan */ }
    for (const k in THEMES.Light) {
      let v;
      try { v = figma.variables.createVariable('color/' + k, col, 'COLOR'); } catch (e) { v = figma.variables.createVariable('color/' + k, col.id, 'COLOR'); }
      v.setValueForMode(light, Object.assign(rgb(THEMES.Light[k]), { a: 1 }));
      if (dark) v.setValueForMode(dark, Object.assign(rgb(THEMES.Dark[k]), { a: 1 }));
    }
    return dark ? 'Light + Dark modes' : 'Light mode only (free plan)';
  } catch (e) { return 'skipped'; }
}

// ---------------------------------------------------------------- components

async function buildIcons(board) {
  const row = await al(board, 'HORIZONTAL', { gap: 20, pad: 24, r: 16, fill: 'Light.surface', name: 'Icons' });
  row.layoutWrap = 'WRAP';
  row.counterAxisSpacing = 20;
  row.resize(700, row.height);
  row.layoutSizingHorizontal = 'FIXED';
  for (const name in ICON_SVG) {
    const filled = name === 'play' || name === 'star';
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="' + (filled ? '#0F0E1A' : 'none') + '" stroke="#0F0E1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICON_SVG[name] + '</svg>';
    const node = figma.createNodeFromSvg(svg);
    node.fills = [];
    const c = figma.createComponentFromNode(node);
    c.name = 'Icon/' + name;
    row.appendChild(c);
    ICONS[name] = c;
  }
  return row;
}

async function variantSet(board, name, comps) {
  const set = figma.combineAsVariants(comps, board);
  set.name = name;
  set.layoutMode = 'HORIZONTAL';
  set.layoutWrap = 'WRAP';
  set.itemSpacing = 32;
  set.counterAxisSpacing = 32;
  set.paddingTop = set.paddingBottom = set.paddingLeft = set.paddingRight = 32;
  set.primaryAxisSizingMode = 'AUTO';
  set.counterAxisSizingMode = 'AUTO';
  set.counterAxisAlignItems = 'MIN';
  set.cornerRadius = 20;
  await paint(set, 'Light.surface2');
  return set;
}

function comp(name, dir, o) {
  const c = figma.createComponent();
  setupAL(c, dir, o);
  c.name = name;
  c.fills = [];
  return c;
}

async function buildNavItem(board, theme, state) {
  const T = theme + '.';
  const on = state === 'Active';
  const c = comp('Theme=' + theme + ', State=' + state, 'HORIZONTAL', { gap: 12, pad: [11, 12, 11, 12], r: 12, w: 212 });
  board.appendChild(c);
  if (on) await paint(c, T + 'brandSoft');
  icon(c, 'home', 20, THEMES[theme][on ? 'brandText' : 'muted']).name = 'Nav Icon';
  await txt(c, 'Dashboard', 'bodyMed', T + (on ? 'brandText' : 'muted'), { name: 'Label' });
  await spacer(c);
  const badge = await al(c, 'HORIZONTAL', { pad: [1, 8, 1, 8], r: 999, fill: 'lime', name: 'Badge' });
  await txt(badge, '4', 'caption', 'ink', { name: 'Badge Label' });
  badge.visible = false;
  return c;
}

async function buildToggle(board, mode) {
  const T = mode + '.';
  const c = comp('Mode=' + mode, 'HORIZONTAL', { gap: 4, pad: 4, r: 999 });
  board.appendChild(c);
  await paint(c, T + 'surface');
  await stroke(c, T + 'border');
  for (const slot of ['sun', 'moon']) {
    const active = (slot === 'sun') === (mode === 'Light');
    const s = await al(c, 'HORIZONTAL', { w: 36, h: 36, r: 999, main: 'CENTER', name: slot === 'sun' ? 'Sun Slot' : 'Moon Slot' });
    if (active) await paint(s, T + 'toggleOn'); else s.fills = [];
    icon(s, slot, 18, active ? THEMES[mode].toggleIcon : THEMES[mode].muted).name = 'Slot Icon';
  }
  return c;
}

async function buildButton(board, style, theme) {
  const map = { Primary: [theme + '.brand', 'white', null], Accent: ['lime', 'ink', null], Ghost: [null, theme + '.text', theme + '.border'] };
  const m = map[style];
  const c = comp('Style=' + style + ', Theme=' + theme, 'HORIZONTAL', { gap: 8, pad: [12, 20, 12, 20], r: 999, main: 'CENTER' });
  board.appendChild(c);
  if (m[0]) await paint(c, m[0]);
  if (m[2]) await stroke(c, m[2], 1.5);
  const ic = icon(c, 'play', 17, hexOf(m[1]));
  ic.name = 'Btn Icon';
  await txt(c, style === 'Accent' ? 'Enroll free' : 'Continue', 'button', m[1], { name: 'Label' });
  if (style !== 'Primary') ic.visible = false;
  return c;
}

async function buildStatCard(board, theme) {
  const T = theme + '.';
  const c = comp('Theme=' + theme, 'VERTICAL', { gap: 6, pad: 22, r: 20, w: 200 });
  board.appendChild(c);
  await paint(c, T + 'surface');
  await stroke(c, T + 'border');
  c.effects = shadow(false);
  const chip = await al(c, 'HORIZONTAL', { w: 40, h: 40, r: 12, main: 'CENTER', fill: T + 'coralChip', name: 'Chip' });
  icon(chip, 'flame', 20, THEMES[theme].coralIcon).name = 'Chip Icon';
  const gap = await al(c, 'HORIZONTAL', { h: 2, name: 'Gap' }); gap.resize(10, 2);
  await txt(c, 'Learning streak', 'body', T + 'muted', { name: 'Label' });
  await txt(c, '9 days', 'stat', T + 'text', { name: 'Value' });
  await txt(c, 'Personal best!', 'smallStrong', 'success', { name: 'Delta' });
  return c;
}

async function buildCourseCard(board, theme) {
  const T = theme + '.';
  const c0 = COURSES[0];
  const p = Math.round(c0.done / c0.total * 100);
  const c = comp('Theme=' + theme, 'HORIZONTAL', { gap: 18, pad: 22, r: 20, w: 732 });
  board.appendChild(c);
  await paint(c, T + 'surface');
  await stroke(c, T + 'border');
  c.effects = shadow(false);
  const thumb = await al(c, 'HORIZONTAL', { w: 76, h: 76, r: 18, main: 'CENTER', fill: 'violet', name: 'Thumb', clip: true });
  icon(thumb, c0.icon, 30, c0.fg).name = 'Thumb Icon';
  const info = await al(c, 'VERTICAL', { gap: 6, name: 'Info' });
  grow(info);
  await txt(info, c0.title, 'h3', T + 'text', { name: 'Title', fill: true });
  await txt(info, c0.done + '/' + c0.total + ' lessons  ·  ' + c0.left + '  ·  ' + c0.cat, 'small', T + 'muted', { name: 'Meta', fill: true });
  const prog = await al(info, 'HORIZONTAL', { gap: 12, name: 'Progress', stretch: true });
  const track = await progressBar(prog, theme, p, 300);
  track.layoutGrow = 1;
  await txt(prog, p + '%', 'smallStrong', T + 'text', { name: 'Percent' });
  await txt(info, 'Up next: ' + c0.next, 'small', T + 'muted', { name: 'Next', fill: true });
  const b = COMP.button['Primary/' + theme].createInstance();
  c.appendChild(b);
  b.name = 'Continue Button';
  // resize fill to match the grown track
  find(c, 'Fill').resize(Math.max(4, find(c, 'Track').width * p / 100), 8);
  return c;
}

async function buildRecCard(board, theme, state) {
  const T = theme + '.';
  const r = RECS[0];
  const hover = state === 'Hover';
  const c = comp('Theme=' + theme + ', State=' + state, 'VERTICAL', { r: 20, w: 357, clip: true });
  board.appendChild(c);
  await paint(c, T + 'surface');
  await stroke(c, hover ? T + 'brand' : T + 'border', hover ? 2 : 1);
  c.effects = shadow(hover);
  const cover = figma.createFrame();
  c.appendChild(cover);
  cover.name = 'Cover';
  cover.resize(357, 132);
  cover.clipsContent = true;
  fillW(cover);
  await paint(cover, 'violet');
  const a = figma.createEllipse(); cover.appendChild(a); a.name = 'Blob A'; a.resize(150, 150); a.x = 357 - 120; a.y = -50; a.fills = [solid(r.c[1])]; a.constraints = { horizontal: 'MAX', vertical: 'MIN' };
  const b = figma.createEllipse(); cover.appendChild(b); b.name = 'Blob B'; b.resize(60, 60); b.x = 357 - 170; b.y = 132 - 42; b.fills = [solid(r.c[2])]; b.constraints = { horizontal: 'MAX', vertical: 'MAX' };
  const match = await al(cover, 'HORIZONTAL', { gap: 6, pad: [5, 10, 5, 10], r: 999, fill: 'ink', opacity: 0.8, name: 'Match' });
  const dot = figma.createEllipse(); match.appendChild(dot); dot.resize(8, 8); dot.fills = [solid(BRAND.lime)];
  await txt(match, r.match + '% match', 'caption', 'white', { name: 'Match Label' });
  match.x = 16; match.y = 132 - 16 - match.height; match.constraints = { horizontal: 'MIN', vertical: 'MAX' };
  const save = await al(cover, 'HORIZONTAL', { w: 36, h: 36, r: 999, main: 'CENTER', fill: 'white', name: 'Save' });
  icon(save, 'bookmark', 17, BRAND.ink);
  save.x = 357 - 14 - 36; save.y = 14; save.constraints = { horizontal: 'MAX', vertical: 'MIN' };
  if (hover) a.resize(170, 170);

  const body = await al(c, 'VERTICAL', { gap: 8, pad: [18, 20, 20, 20], name: 'Body', stretch: true });
  const why = await al(body, 'HORIZONTAL', { gap: 6, name: 'Why Row' });
  icon(why, 'target', 14, THEMES[theme].brandText);
  await txt(why, r.why, 'caption', T + 'brandText', { name: 'Why' });
  await txt(body, r.title, 'card', hover ? T + 'brand' : T + 'text', { name: 'Title', fill: true });
  await txt(body, r.len + '  ·  ' + r.learners + ' learners', 'small', T + 'muted', { name: 'Meta' });
  const foot = await al(body, 'HORIZONTAL', { gap: 4, pad: [10, 0, 0, 0], name: 'Footer', stretch: true });
  icon(foot, 'star', 15, BRAND.star);
  await txt(foot, r.rating, 'smallStrong', T + 'text', { name: 'Rating' });
  await spacer(foot);
  const en = COMP.button['Accent/' + theme].createInstance();
  foot.appendChild(en);
  en.name = 'Enroll Button';
  return c;
}

async function buildComponentsPage(page) {
  const board = await al(page, 'VERTICAL', { gap: 40, pad: 64, fill: 'Light.bg', name: 'Component Library' });
  await txt(board, 'Component library', 'greeting', 'Light.text');
  await txt(board, 'Every component is built with Auto Layout and has Light / Dark variants. Recommendation cards have a hover state (prototype: While hovering → Smart Animate). The theme toggle switches variants on click.', 'body', 'Light.muted');

  const label = async t => txt(board, t, 'h2', 'Light.text');
  await label('Icons');
  await buildIcons(board);

  COMP.button = {};
  await label('Button');
  const btns = [];
  for (const th of ['Light', 'Dark']) for (const st of ['Primary', 'Accent', 'Ghost']) { const b = await buildButton(board, st, th); COMP.button[st + '/' + th] = b; btns.push(b); }
  await variantSet(board, 'Button', btns);

  await label('Theme toggle');
  COMP.toggle = {};
  const tg = [];
  for (const m of ['Light', 'Dark']) { const t = await buildToggle(board, m); COMP.toggle[m] = t; tg.push(t); }
  await variantSet(board, 'Theme Toggle', tg);
  await react(COMP.toggle.Light, 'ON_CLICK', COMP.toggle.Dark.id, 'CHANGE_TO', 300);
  await react(COMP.toggle.Dark, 'ON_CLICK', COMP.toggle.Light.id, 'CHANGE_TO', 300);

  await label('Navigation item');
  COMP.nav = {};
  const navs = [];
  for (const th of ['Light', 'Dark']) for (const st of ['Default', 'Active']) { const n = await buildNavItem(board, th, st); COMP.nav[th + '/' + st] = n; navs.push(n); }
  await variantSet(board, 'Nav Item', navs);

  await label('Stat card');
  COMP.stat = {};
  const stats = [];
  for (const th of ['Light', 'Dark']) { const s = await buildStatCard(board, th); COMP.stat[th] = s; stats.push(s); }
  await variantSet(board, 'Stat Card', stats);

  await label('Course progress card');
  COMP.course = {};
  const cc = [];
  for (const th of ['Light', 'Dark']) { const s = await buildCourseCard(board, th); COMP.course[th] = s; cc.push(s); }
  await variantSet(board, 'Course Card', cc);

  await label('Recommendation card');
  COMP.rec = {};
  const rc = [];
  for (const th of ['Light', 'Dark']) for (const st of ['Default', 'Hover']) { const s = await buildRecCard(board, th, st); COMP.rec[th + '/' + st] = s; rc.push(s); }
  await variantSet(board, 'Recommendation Card', rc);
  for (const th of ['Light', 'Dark']) await react(COMP.rec[th + '/Default'], 'ON_HOVER', COMP.rec[th + '/Hover'].id, 'CHANGE_TO', 200);
  return board;
}

// ---------------------------------------------------------------- screens

async function sidebar(screen, theme, active) {
  const T = theme + '.';
  const side = await al(screen, 'VERTICAL', { gap: 28, pad: [28, 18, 28, 18], w: 248, name: 'Sidebar', fill: T + 'surface' });
  side.layoutSizingVertical = 'FILL';
  side.strokes = [solid(THEMES[theme].border)];
  side.strokeRightWeight = 1; side.strokeLeftWeight = 0; side.strokeTopWeight = 0; side.strokeBottomWeight = 0;
  const logo = await al(side, 'HORIZONTAL', { gap: 10, pad: [0, 10, 0, 10], name: 'Logo' });
  const mk = figma.createNodeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 96 96"><rect width="96" height="96" rx="24.96" fill="#5B3DF5"/><rect x="24" y="40.32" width="20.16" height="38.4" rx="10.08" fill="#FFFFFF"/><circle cx="59.52" cy="27.84" r="12.48" fill="#C6F432"/></svg>');
  mk.fills = []; mk.name = 'Mark'; logo.appendChild(mk);
  const w = await txt(logo, 'internee.pk', 'h2', T + 'text', { name: 'Wordmark' });
  w.setRangeFills(8, 11, [solid(theme === 'Dark' ? BRAND.lime : BRAND.violet)]);

  const nav = await al(side, 'VERTICAL', { gap: 4, name: 'Nav', stretch: true });
  const items = [['Dashboard', 'home'], ['My courses', 'book'], ['For you', 'star'], ['Schedule', 'cal'], ['Certificates', 'award'], ['Settings', 'sliders']];
  const out = {};
  for (const it of items) {
    const on = it[0] === active;
    const inst = COMP.nav[theme + '/' + (on ? 'Active' : 'Default')].createInstance();
    nav.appendChild(inst);
    fillW(inst);
    inst.name = 'Nav · ' + it[0];
    setText(inst, 'Label', it[0]);
    swapIcon(find(inst, 'Nav Icon'), it[1], THEMES[theme][on ? 'brandText' : 'muted']);
    if (it[0] === 'My courses') find(inst, 'Badge').visible = true;
    out[it[0]] = inst;
  }
  const sp = await al(side, 'VERTICAL', { name: 'Spacer' }); sp.layoutGrow = 1;
  const goal = await al(side, 'VERTICAL', { gap: 4, pad: 18, r: 18, fill: T + 'goal', name: 'Weekly Goal', stretch: true, clip: true });
  await txt(goal, 'Weekly goal', 'h3', 'paper');
  await txt(goal, '12.5 of 15 hours', 'small', 'paper');
  const gt = await al(goal, 'HORIZONTAL', { pad: [8, 0, 0, 0], name: 'Goal Bar', stretch: true });
  const tr = figma.createFrame(); gt.appendChild(tr); tr.name = 'Track'; tr.resize(176, 8); tr.cornerRadius = 999; tr.fills = [solid('#FFFFFF', 0.14)]; fillW(tr);
  const fl = figma.createRectangle(); tr.appendChild(fl); fl.resize(146, 8); fl.cornerRadius = 999; fl.fills = [solid(BRAND.lime)]; fl.name = 'Fill';
  return out;
}

async function topbar(main, theme, title, sub) {
  const T = theme + '.';
  const top = await al(main, 'HORIZONTAL', { gap: 16, name: 'Top Bar', stretch: true });
  const g = await al(top, 'VERTICAL', { gap: 4, name: 'Greeting' }); grow(g);
  await txt(g, title, 'greeting', T + 'text', { name: 'Title' });
  await txt(g, sub, 'body', T + 'muted', { name: 'Subtitle' });
  const search = await al(top, 'HORIZONTAL', { gap: 10, pad: [11, 16, 11, 16], r: 999, w: 280, fill: T + 'surface', stroke: T + 'border', name: 'Search' });
  icon(search, 'search', 20, THEMES[theme].muted);
  await txt(search, 'Search courses, lessons…', 'body', T + 'muted');
  const tog = COMP.toggle[theme].createInstance(); top.appendChild(tog); tog.name = 'Theme Toggle';
  const bell = await al(top, 'HORIZONTAL', { w: 44, h: 44, r: 999, main: 'CENTER', fill: T + 'surface', stroke: T + 'border', name: 'Notifications' });
  icon(bell, 'bell', 20, THEMES[theme].text);
  const av = await al(top, 'HORIZONTAL', { w: 44, h: 44, r: 999, main: 'CENTER', fill: 'lime', name: 'Avatar' });
  await txt(av, 'S', 'h3', 'ink');
  return tog;
}

async function screenShell(page, theme, name, x) {
  const T = theme + '.';
  const screen = figma.createFrame();
  page.appendChild(screen);
  screen.name = name;
  screen.x = x; screen.y = 0;
  setupAL(screen, 'HORIZONTAL', { w: 1440, align: 'MIN' });
  screen.layoutSizingVertical = 'HUG';
  screen.clipsContent = true;
  await paint(screen, T + 'bg');
  return screen;
}

async function mainCol(screen) {
  const main = await al(screen, 'VERTICAL', { gap: 28, pad: [28, 40, 48, 40], name: 'Main' });
  grow(main);
  return main;
}

async function sectionHead(parent, theme, title, right) {
  const T = theme + '.';
  const h = await al(parent, 'HORIZONTAL', { gap: 12, name: 'Section Header · ' + title, stretch: true });
  await txt(h, title, 'h2', T + 'text', { name: 'Section Title' });
  await spacer(h);
  if (right) {
    const l = await al(h, 'HORIZONTAL', { gap: 6, name: 'Link' });
    await txt(l, right, 'smallStrong', T + 'brandText');
    icon(l, 'right', 16, THEMES[theme].brandText);
  }
  return h;
}

async function card(parent, theme, name, o) {
  o = o || {};
  const T = theme + '.';
  const c = await al(parent, o.dir || 'VERTICAL', { gap: o.gap === undefined ? 8 : o.gap, pad: o.pad === undefined ? 22 : o.pad, r: 20, fill: T + 'surface', stroke: T + 'border', name, w: o.w, clip: o.clip });
  c.effects = shadow(false);
  return c;
}

async function buildDashboard(page, theme, x) {
  const T = theme + '.';
  const screen = await screenShell(page, theme, 'Dashboard — ' + theme, x);
  await sidebar(screen, theme, 'Dashboard');
  const main = await mainCol(screen);
  const toggle = await topbar(main, theme, 'Good morning, Sara 👋', "You're 2 lessons away from this week's goal. Keep the streak going!");

  // Stats
  const stats = await al(main, 'HORIZONTAL', { gap: 20, name: 'Stats', stretch: true, align: 'MIN' });
  stats.counterAxisAlignItems = 'MIN';
  const lessonsDone = COURSES.reduce((a, c) => a + c.done, 0), lessonsAll = COURSES.reduce((a, c) => a + c.total, 0);
  const overallP = Math.round(lessonsDone / lessonsAll * 100);
  const ov = await al(stats, 'HORIZONTAL', { gap: 22, pad: 22, r: 20, w: 452, fill: 'violet', name: 'Overall Progress', clip: true });
  ov.layoutSizingVertical = 'FILL';
  await ring(ov, overallP, 104, { key: 'white', opacity: 0.18 }, 'lime', 'white');
  const ot = await al(ov, 'VERTICAL', { gap: 4, name: 'Overall Text' }); grow(ot);
  await txt(ot, 'Overall progress', 'card', 'white');
  await txt(ot, lessonsDone + ' of ' + lessonsAll + ' lessons across 4 courses', 'small', 'white', { fill: true });
  const tr = await al(ot, 'HORIZONTAL', { gap: 6, pad: [5, 12, 5, 12], r: 999, fill: 'white', opacity: 0.16, name: 'Trend' });
  icon(tr, 'trend', 15, BRAND.white);
  await txt(tr, '+8% this week', 'smallStrong', 'white');
  const sdata = [
    ['flame', 'coralChip', 'coralIcon', 'Learning streak', '9 days', 'Personal best!', 'success'],
    ['clock', 'brandSoft', 'brandText', 'Hours this week', '12.5h', '+2.5h vs last week', 'success'],
    ['award', 'limeChip', 'limeIcon', 'Certificates', '3', '1 more at 100% Python', T + 'muted'],
  ];
  for (const s of sdata) {
    const inst = COMP.stat[theme].createInstance();
    stats.appendChild(inst);
    grow(inst);
    inst.name = 'Stat · ' + s[3];
    await paint(find(inst, 'Chip'), T + s[1]);
    swapIcon(find(inst, 'Chip Icon'), s[0], THEMES[theme][s[2]]);
    setText(inst, 'Label', s[3]);
    setText(inst, 'Value', s[4]);
    const d = setText(inst, 'Delta', s[5]);
    await paint(d, s[6]);
  }

  // Course progress + side column
  const row = await al(main, 'HORIZONTAL', { gap: 20, name: 'Learning Row', stretch: true, align: 'MIN' });
  const left = await al(row, 'VERTICAL', { gap: 14, name: 'Continue Learning' }); grow(left);
  await sectionHead(left, theme, 'Continue learning', 'View all');
  const courseInstances = [];
  for (const c of COURSES) {
    let inst = COMP.course[theme].createInstance();
    left.appendChild(inst);
    fillW(inst);
    inst.name = 'Course · ' + c.title;
    const p = Math.round(c.done / c.total * 100);
    setText(inst, 'Title', c.title);
    setText(inst, 'Meta', c.done + '/' + c.total + ' lessons  ·  ' + c.left + '  ·  ' + c.cat);
    setText(inst, 'Percent', p + '%');
    setText(inst, 'Next', 'Up next: ' + c.next);
    find(inst, 'Thumb').fills = [solid(c.bg)];
    swapIcon(find(inst, 'Thumb Icon'), c.icon, c.fg);
    const w = Math.max(4, find(inst, 'Track').width * p / 100);
    try { find(inst, 'Fill').resize(w, 8); }
    catch (e) { inst = inst.detachInstance(); find(inst, 'Fill').resize(w, 8); }
    courseInstances.push(inst);
  }

  const right = await al(row, 'VERTICAL', { gap: 20, w: 360, name: 'Side Column' });
  const act = await card(right, theme, 'Weekly Activity', { gap: 4 });
  fillW(act);
  const ah = await al(act, 'HORIZONTAL', { name: 'Header', stretch: true });
  await txt(ah, 'Weekly activity', 'card', T + 'text');
  await spacer(ah);
  await txt(ah, 'Oct 20 – 26', 'small', T + 'muted');
  const tot = await al(act, 'HORIZONTAL', { gap: 8, name: 'Total', align: 'BASELINE' });
  await txt(tot, '12.5h', 'stat', T + 'text');
  await txt(tot, 'learned · goal 15h', 'small', T + 'muted');
  const chart = await al(act, 'HORIZONTAL', { gap: 10, h: 150, name: 'Bar Chart', stretch: true, align: 'MAX' });
  for (let i = 0; i < WEEK.length; i++) {
    const col = await al(chart, 'VERTICAL', { gap: 8, h: 150, name: WEEK[i][0], align: 'CENTER', main: 'MAX' });
    grow(col);
    const b = figma.createRectangle(); col.appendChild(b); b.name = 'Bar'; b.resize(30, Math.round(WEEK[i][1] / 3 * 110)); b.cornerRadius = 9;
    await paint(b, i === 4 ? T + 'brand' : T + 'brandSoft');
    await txt(col, WEEK[i][0], 'small', T + 'muted');
  }

  const dl = await card(right, theme, 'Upcoming Deadlines', { gap: 0 });
  fillW(dl);
  await txt(dl, 'Upcoming deadlines', 'card', T + 'text');
  for (let i = 0; i < DEADLINES.length; i++) {
    const d = DEADLINES[i];
    const li = await al(dl, 'HORIZONTAL', { gap: 12, pad: [12, 0, 12, 0], name: 'Deadline · ' + d[2], stretch: true });
    if (i < DEADLINES.length - 1) { li.strokes = [solid(THEMES[theme].border)]; li.strokeBottomWeight = 1; li.strokeTopWeight = 0; li.strokeLeftWeight = 0; li.strokeRightWeight = 0; }
    const date = await al(li, 'VERTICAL', { w: 48, h: 52, r: 12, fill: T + 'surface2', align: 'CENTER', main: 'CENTER', name: 'Date' });
    await txt(date, d[0], 'card', T + 'text');
    await txt(date, d[1], 'caption', T + 'muted');
    const tx = await al(li, 'VERTICAL', { gap: 2, name: 'Text' }); grow(tx);
    await txt(tx, d[2], 'smallStrong', T + 'text');
    await txt(tx, d[3], 'caption', T + 'muted');
    const pill = await al(li, 'HORIZONTAL', { pad: [4, 10, 4, 10], r: 999, name: 'Due', fill: d[5] ? T + 'coralChip' : T + 'surface2' });
    await txt(pill, d[4], 'caption', d[5] ? T + 'coralIcon' : T + 'muted');
  }

  // Recommendations
  const recs = await al(main, 'VERTICAL', { gap: 16, name: 'Recommended For You', stretch: true });
  const rh = await al(recs, 'HORIZONTAL', { gap: 12, name: 'Header', stretch: true });
  const rt = await al(rh, 'VERTICAL', { gap: 2, name: 'Heading' }); grow(rt);
  await txt(rt, 'Recommended for you', 'h2', T + 'text');
  await txt(rt, 'Picked from your goals, progress and what your cohort loves.', 'small', T + 'muted');
  const chips = await al(rh, 'HORIZONTAL', { gap: 8, name: 'Filters' });
  for (const f of ['All', 'Design', 'Development', 'Data', 'Marketing']) {
    const on = f === 'All';
    const ch = await al(chips, 'HORIZONTAL', { pad: [8, 14, 8, 14], r: 999, fill: on ? T + 'chipOn' : T + 'surface', stroke: on ? null : T + 'border', name: 'Chip · ' + f });
    await txt(ch, f, 'smallStrong', on ? T + 'chipOnText' : T + 'muted');
  }
  const rr = await al(recs, 'HORIZONTAL', { gap: 20, name: 'Cards', stretch: true, align: 'MIN' });
  for (const r of RECS) {
    const inst = COMP.rec[theme + '/Default'].createInstance();
    rr.appendChild(inst);
    grow(inst);
    inst.name = 'Recommendation · ' + r.title;
    setText(inst, 'Title', r.title);
    setText(inst, 'Why', r.why);
    setText(inst, 'Meta', r.len + '  ·  ' + r.learners + ' learners');
    setText(inst, 'Rating', r.rating);
    setText(inst, 'Match Label', r.match + '% match');
    find(inst, 'Cover').fills = [solid(r.c[0])];
    find(inst, 'Blob A').fills = [solid(r.c[1])];
    find(inst, 'Blob B').fills = [solid(r.c[2])];
  }
  return { screen, toggle, courseInstances };
}

async function buildCoursePage(page, theme, x) {
  const T = theme + '.';
  const c = COURSES[0];
  const p = Math.round(c.done / c.total * 100);
  const screen = await screenShell(page, theme, 'Course — ' + theme, x);
  const nav = await sidebar(screen, theme, 'My courses');
  const main = await mainCol(screen);
  main.itemSpacing = 20;

  const top = await al(main, 'HORIZONTAL', { gap: 16, name: 'Top Bar', stretch: true });
  const back = await al(top, 'HORIZONTAL', { gap: 8, name: 'Back' });
  icon(back, 'left', 20, THEMES[theme].muted);
  await txt(back, 'Back to dashboard', 'smallStrong', T + 'muted');
  await spacer(top);
  const tog = COMP.toggle[theme].createInstance(); top.appendChild(tog); tog.name = 'Theme Toggle';
  const av = await al(top, 'HORIZONTAL', { w: 44, h: 44, r: 999, main: 'CENTER', fill: 'lime', name: 'Avatar' });
  await txt(av, 'S', 'h3', 'ink');

  const hero = await card(main, theme, 'Course Hero', { dir: 'HORIZONTAL', gap: 28, pad: 28 });
  fillW(hero);
  const hi = await al(hero, 'VERTICAL', { gap: 10, name: 'Info' }); grow(hi);
  await txt(hi, 'Design · Mentor: Hira Malik', 'eyebrow', T + 'brandText');
  await txt(hi, c.title, 'hero', T + 'text', { fill: true });
  await txt(hi, '18/25 lessons  ·  6h 10m left  ·  Certificate on completion', 'small', T + 'muted');
  const hp = await al(hi, 'HORIZONTAL', { gap: 12, w: 520, name: 'Progress' });
  const tr = await progressBar(hp, theme, p, 470);
  tr.layoutGrow = 1;
  find(tr, 'Fill').resize(tr.width * p / 100, 8);
  await txt(hp, p + '%', 'smallStrong', T + 'text');
  const btns = await al(hi, 'HORIZONTAL', { gap: 10, pad: [8, 0, 0, 0], name: 'Actions' });
  const resume = COMP.button['Primary/' + theme].createInstance(); btns.appendChild(resume); setText(resume, 'Label', 'Resume: Prototyping in Figma'); resume.name = 'Resume Button';
  const notes = COMP.button['Ghost/' + theme].createInstance(); btns.appendChild(notes); setText(notes, 'Label', 'Course notes'); notes.name = 'Notes Button';
  await ring(hero, p, 150, { key: T + 'track' }, T + 'brand', T + 'text');

  const row = await al(main, 'HORIZONTAL', { gap: 20, name: 'Detail Row', stretch: true, align: 'MIN' });
  const mods = await card(row, theme, 'Modules', { gap: 0 });
  grow(mods);
  const mh = await al(mods, 'HORIZONTAL', { pad: [0, 0, 8, 0], name: 'Header', stretch: true });
  await txt(mh, 'Modules', 'card', T + 'text');
  await spacer(mh);
  await txt(mh, '3 of 6 complete', 'small', T + 'muted');
  for (let i = 0; i < MODULES.length; i++) {
    const m = MODULES[i];
    const li = await al(mods, 'HORIZONTAL', { gap: 14, pad: [14, 4, 14, 4], name: 'Module · ' + m[0], stretch: true });
    if (i < MODULES.length - 1) { li.strokes = [solid(THEMES[theme].border)]; li.strokeBottomWeight = 1; li.strokeTopWeight = 0; li.strokeLeftWeight = 0; li.strokeRightWeight = 0; }
    const st = await al(li, 'HORIZONTAL', { w: 36, h: 36, r: 999, main: 'CENTER', name: 'Status', fill: m[1] === 'done' ? 'success' : m[1] === 'now' ? T + 'brand' : T + 'surface2' });
    icon(st, m[1] === 'done' ? 'check' : m[1] === 'now' ? 'play' : 'lock', 17, m[1] === 'lock' ? THEMES[theme].muted : BRAND.white);
    const tx = await al(li, 'VERTICAL', { gap: 2, name: 'Text' }); grow(tx);
    await txt(tx, (i + 1) + '. ' + m[0], 'smallStrong', m[1] === 'lock' ? T + 'muted' : T + 'text');
    await txt(tx, m[1] === 'done' ? 'Completed' : m[1] === 'now' ? 'In progress — pick up where you left off' : 'Unlocks after the previous module', 'small', T + 'muted');
    await txt(li, (4 + (i % 3)) + ' lessons', 'small', T + 'muted');
  }

  const side = await al(row, 'VERTICAL', { gap: 20, w: 340, name: 'Side Column' });
  const sc = await card(side, theme, 'Your Stats', { gap: 0 });
  fillW(sc);
  await txt(sc, 'Your stats', 'card', T + 'text');
  for (const kv of [['Quiz average', '87%'], ['Time spent', '14h 20m'], ['Assignments', '5 / 6 submitted'], ['Cohort rank', 'Top 15%']]) {
    const r = await al(sc, 'HORIZONTAL', { pad: [10, 0, 10, 0], name: kv[0], stretch: true });
    await txt(r, kv[0], 'small', T + 'muted');
    await spacer(r);
    await txt(r, kv[1], 'smallStrong', T + 'text');
  }
  const nx = await al(side, 'VERTICAL', { gap: 12, name: 'Recommended Next', stretch: true });
  await txt(nx, 'Recommended next', 'card', T + 'text');
  const rec = COMP.rec[theme + '/Default'].createInstance();
  nx.appendChild(rec);
  fillW(rec);
  rec.name = 'Recommendation · Next';
  return { screen, toggle: tog, back, navDash: nav['Dashboard'] };
}

async function buildCover(page) {
  const f = figma.createFrame();
  page.appendChild(f);
  f.name = 'Cover';
  f.resize(1920, 1080);
  await paint(f, 'ink');
  const blob = figma.createEllipse(); f.appendChild(blob); blob.resize(1000, 1000); blob.x = 1180; blob.y = -260; blob.fills = [solid(BRAND.violet)];
  const dot = figma.createEllipse(); f.appendChild(dot); dot.resize(240, 240); dot.x = 1090; dot.y = 640; dot.fills = [solid(BRAND.lime)];
  const col = await al(f, 'VERTICAL', { gap: 20, name: 'Title' });
  col.x = 120; col.y = 300;
  const e = await txt(col, 'Internee.pk · Internship task', 'eyebrow', 'lime'); e.fontSize = 22; e.lineHeight = { value: 28, unit: 'PIXELS' };
  const h = await txt(col, 'LMS Dashboard\nRedesign', 'hero', 'paper'); h.fontSize = 120; h.lineHeight = { value: 116, unit: 'PIXELS' };
  const s = await txt(col, 'Course progress tracking · Personalised recommendations · Dark / Light mode', 'bodyMed', 'paper'); s.fontSize = 30; s.lineHeight = { value: 40, unit: 'PIXELS' }; s.opacity = 0.75;
  const b = await txt(col, 'Open the “Prototype” page and press ▶ Present to try it.', 'body', 'paper'); b.fontSize = 20; b.opacity = 0.6;
  return f;
}

async function buildFoundations(page) {
  const board = await al(page, 'VERTICAL', { gap: 28, pad: 64, fill: 'Light.bg', name: 'Foundations' });
  await txt(board, 'Foundations · Light & Dark tokens', 'greeting', 'Light.text');
  await txt(board, 'Each token exists as a paint style in both themes (and as a variable with Light / Dark modes when your plan allows).', 'body', 'Light.muted');
  for (const th of ['Light', 'Dark']) {
    const row = await al(board, 'HORIZONTAL', { gap: 12, pad: 20, r: 20, fill: th + '.bg', name: th + ' tokens' });
    row.layoutWrap = 'WRAP'; row.counterAxisSpacing = 12; row.resize(1200, row.height); row.layoutSizingHorizontal = 'FIXED';
    for (const k in THEMES[th]) {
      const sw = await al(row, 'VERTICAL', { gap: 6, pad: 10, r: 14, w: 132, fill: th + '.surface', stroke: th + '.border', name: k });
      const chip = figma.createRectangle(); sw.appendChild(chip); chip.resize(112, 56); chip.cornerRadius = 10; await paint(chip, th + '.' + k);
      await txt(sw, k, 'smallStrong', th + '.text');
      await txt(sw, THEMES[th][k], 'caption', th + '.muted');
    }
  }
  return board;
}

// ---------------------------------------------------------------- main

async function main() {
  await loadFonts();
  createStyles();
  const vars = await createVariables();

  const cover = figma.root.children[0];
  cover.name = 'Cover';
  const proto = figma.createPage(); proto.name = 'Prototype';
  const compPage = figma.createPage(); compPage.name = 'Components';
  const found = figma.createPage(); found.name = 'Foundations';
  const bg = [{ type: 'SOLID', color: rgb('#E4E1DA') }];
  [cover, proto, compPage, found].forEach(p => { p.backgrounds = bg; });

  figma.notify('Building components…');
  await buildComponentsPage(compPage);
  figma.notify('Building screens…');
  const dL = await buildDashboard(proto, 'Light', 0);
  const dD = await buildDashboard(proto, 'Dark', 1600);
  const cL = await buildCoursePage(proto, 'Light', 0);
  const cD = await buildCoursePage(proto, 'Dark', 1600);
  cL.screen.y = cD.screen.y = Math.max(dL.screen.height, dD.screen.height) + 200;

  figma.notify('Wiring prototype…');
  // Theme switch: Smart Animate between matching Light / Dark screens
  await react(dL.toggle, 'ON_CLICK', dD.screen.id, 'NAVIGATE', 400);
  await react(dD.toggle, 'ON_CLICK', dL.screen.id, 'NAVIGATE', 400);
  await react(cL.toggle, 'ON_CLICK', cD.screen.id, 'NAVIGATE', 400);
  await react(cD.toggle, 'ON_CLICK', cL.screen.id, 'NAVIGATE', 400);
  // Course cards → course page, back → dashboard
  for (const i of dL.courseInstances) await react(i, 'ON_CLICK', cL.screen.id, 'NAVIGATE', 350);
  for (const i of dD.courseInstances) await react(i, 'ON_CLICK', cD.screen.id, 'NAVIGATE', 350);
  await react(cL.back, 'ON_CLICK', dL.screen.id, 'NAVIGATE', 350);
  await react(cD.back, 'ON_CLICK', dD.screen.id, 'NAVIGATE', 350);
  await react(cL.navDash, 'ON_CLICK', dL.screen.id, 'NAVIGATE', 350);
  await react(cD.navDash, 'ON_CLICK', dD.screen.id, 'NAVIGATE', 350);
  try { proto.flowStartingPoints = [{ nodeId: dL.screen.id, name: 'LMS Dashboard' }]; } catch (e) { console.warn(e); }

  await buildFoundations(found);
  const coverFrame = await buildCover(cover);
  await figma.setCurrentPageAsync(cover);
  figma.viewport.scrollAndZoomIntoView([coverFrame]);
  figma.closePlugin('✅ LMS Dashboard prototype generated. Open “Prototype” and press Present. Variables: ' + vars + '.');
}

main().catch(e => { console.error(e); figma.closePlugin('❌ ' + (e && e.message ? e.message : String(e))); });
