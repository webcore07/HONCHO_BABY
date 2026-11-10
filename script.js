'use strict';

const WHATSAPP = '919659066605';

/* ===== COLOUR HEX MAP — add new colours here ===== */
const COLOR_HEX = {
  'Orange':      '#FFB347',
  'White':       '#F5F5F5',
  'Blue':        '#A9D1EF',
  'Green':       '#A8DDB5',
  'Violet':      '#C9A0DC',
  'Pale Yellow': '#FFF3A3',
  'Purple':      '#B39DDB',
  'Yellow':      '#FFE066',
  'Light Blue':  '#B3E5FC',
  'Cream':       '#FFF8E1',
  'Pink':        '#F4B6C7',
  'Mint':        '#B3F0D4',
  'Peach':       '#FFD0B3',
};

/* =====================================================================
   PRODUCT DATA — THE ONLY PLACE YOU NEED TO EDIT FOR PRODUCTS
   ---------------------------------------------------------------------
   HOW TO REPLACE A PHOTO:
     1. Put your image file inside the  assets/products/  folder
     2. Find the product below by its id or name
     3. Update the  image  value to your new filename
        Example:  image: 'assets/products/knot-jabla.jpg'
     4. Save — the website updates automatically

   FIELDS:
     id          — unique number, do not change
     name        — product display name
     image       — photo path  (all files go in assets/products/)
     patterns    — number of patterns available  (null = not confirmed)
     colors      — colour names array            ([] = none/not confirmed)
     description — popup description             ('' = default message)
     category    — collection filter category
   ===================================================================== */
const PRODUCTS = [

  // -- BABY CLOTHING --------------------------------------------------
  // id 1: replace image path with your photo
  { id:  1, name: 'Knot Jabla',
    image: 'KNOT JABLA.jpeg',
    patterns: 6, colors: ['Orange','White','Blue','Green','Violet'],
    description: '', category: 'Baby Clothing' },

  // id 2: replace image path with your photo
  { id:  2, name: 'Unisex Nappies',
    image: 'NAPPIES.jpeg',
    patterns: 6, colors: ['Orange','White','Violet','Blue','Pale Yellow'],
    description: '', category: 'Baby Clothing' },

  // id 3: replace image path with your photo
  { id:  3, name: 'Half Sleeve Top & B Shorts',
    image: 'Half Sleeve 2.jpeg',
    patterns: 3, colors: ['White'],
    description: '', category: 'Baby Clothing' },

  // id 4: replace image path with your photo
  { id:  4, name: 'Unisex Half Sleeve Top',
    image: 'HALF SLEEVE.jpeg',
    patterns: 4, colors: ['Orange','Pale Yellow','Purple','Blue'],
    description: '', category: 'Baby Clothing' },

  // -- BABY BLANKETS & BEDDING ----------------------------------------
  // id 5: replace image path with your photo
  { id:  5, name: 'Blanket',
    image: 'BLANKET.jpeg',
    patterns: 3, colors: ['Blue','Yellow','Orange'],
    description: '', category: 'Baby Blankets and Bedding' },

  // id 9: replace image path with your photo (different colours from id 5)
  { id:  9, name: 'Blanket',
    image: 'BLANKET 2.jpeg',
    patterns: 3, colors: ['Blue','Green','Orange'],
    description: '', category: 'Baby Blankets and Bedding' },

  // id 10: replace image path with your photo
  { id: 10, name: 'Frill Blanket',
    image: 'FRILL BLANKET.jpeg',
    patterns: 2, colors: ['Orange','Cream','Yellow'],
    description: '', category: 'Baby Blankets and Bedding' },

  // id 12: replace image path with your photo
  { id: 12, name: 'Dry Sheet',
    image: 'TOWEL.jpeg',
    patterns: 6, colors: ['Blue','White','Pale Yellow','Orange','Purple'],
    description: '', category: 'Baby Blankets and Bedding' },

  // -- BABY ESSENTIALS ------------------------------------------------
  // id 6: replace image path with your photo
  { id:  6, name: 'Cap',
    image: 'CAP.jpeg',
    patterns: 12, colors: ['Green','Blue','Orange','Purple','White'],
    description: '', category: 'Baby Essentials' },

  // id 7: replace image path with your photo
  { id:  7, name: 'Mittens & Booties',
    image: 'MITTENS & BOOTIES.jpeg',
    patterns: 12, colors: ['Pale Yellow','Blue','White','Orange','Purple','Green','Light Blue'],
    description: '', category: 'Baby Essentials' },

  // id 8: replace image path with your photo
  { id:  8, name: 'Towel',
    image: 'TOWEL.jpeg',
    patterns: 6, colors: ['White','Orange','Green','Light Blue','Purple'],
    description: '', category: 'Baby Essentials' },

  // id 11: replace image path with your photo
  { id: 11, name: 'Bib',
    image: 'BIB.jpeg',
    patterns: 6, colors: ['Green','White','Blue','Purple','Orange'],
    description: '', category: 'Baby Essentials' },

  // -- BABY BOOKS & LEARNING ------------------------------------------
  // patterns: null and colors: [] = not confirmed, do not invent values

  // id 13: replace image path with your photo
  { id: 13, name: 'Timetable Books',
    image: 'Timetables.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 14: replace image path with your photo
  { id: 14, name: 'Finger Print Books',
    image: 'Finger prints.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 15: replace image path with your photo
  { id: 15, name: 'Firefighter',
    image: 'Firefighter.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 17: replace image path with your photo
  { id: 17, name: 'Touch & Feel - Little Bunny',
    image: 'Little bunny.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 18: replace image path with your photo
  { id: 18, name: 'Touch & Feel - Little Kitten',
    image: 'Little kit.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 19: replace image path with your photo
  { id: 19, name: 'Touch & Feel - Puppy',
    image: 'Touch and feel 3.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 20: replace image path with your photo
  { id: 20, name: 'Touch & Feel - Zoo Kitten',
    image: 'Little kit.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 21: replace image path with your photo
  { id: 21, name: 'My First Rhymes',
    image: 'First nursery times.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 22: replace image path with your photo
  { id: 22, name: 'Unicorn Stories',
    image: 'Unicorn stories.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 23: replace image path with your photo
  { id: 23, name: 'Record Books - 2 Books',
    image: 'Rrcord book.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 24: replace image path with your photo
  { id: 24, name: 'Noisy Baby Animals',
    image: 'play sound.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 25: replace image path with your photo
  { id: 25, name: 'Pop-Up Books',
    image: 'POP up.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

  // id 26: replace image path with your photo
  { id: 26, name: "Let's Learn ABC",
    image: 'Lets learn ABC.jpeg',
    patterns: null, colors: [], description: '', category: 'Baby Books and Learning' },

];

/* ===== COLLECTIONS ===== */
const COLLECTIONS = [
  { title: 'Baby Clothing',           bg: '--pink',   text: 'Jablas, tops, nappies and more.',         cat: 'Baby Clothing',           image: 'Half Sleeve 2.jpeg' },
  { title: 'Baby Blankets & Bedding', bg: '--mint',   text: 'Blankets, frill blankets and dry sheets.', cat: 'Baby Blankets and Bedding', image: 'BLANKET 2.jpeg' },
  { title: 'Baby Books & Learning',   bg: '--yellow', text: 'Story, touch & feel, painting and more.', cat: 'Baby Books and Learning',  image: 'Firefighter.jpeg' },
];

const PASTELS = ['--pink','--blue','--mint','--yellow','--peach','--lilac'];

/* ===== HELPERS ===== */
const $   = (s, r = document) => r.querySelector(s);
const el  = h => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imgTag    = (src, alt) => '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" onerror="this.remove()">';
const ph        = name => '<div class="ph"><span>📷</span><b>' + esc(name.toUpperCase()) + '</b><small>Add photo: ' + esc(name.toLowerCase().replace(/\s+/g,'-')) + '.jpg</small></div>';
const swatchRow = (colors, cls) => colors.map(c => '<span class="' + cls + '" style="background:' + (COLOR_HEX[c] || '#ccc') + '" title="' + esc(c) + '"></span>').join('');

/* ===== THEME TOGGLE ===== */
$('#themeBtn').onclick = () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('hb-theme', next); } catch(e) {}
};

/* ===== PATTERN CIRCLES DATA ===== */
/* TO REPLACE AN IMAGE: update the 'image' path below to your file name */
const PATTERNS = [
  { color: 'WHITE',  name: 'Farmyard',         image: 'Farmyard.jpeg' },
  { color: 'WHITE',  name: 'Tiny Turf',         image: 'Tiny turf.jpeg' },
  { color: 'BLUE',   name: 'Lighthouse Magic',  image: 'Lighthouse Magic.jpeg' },
  { color: 'ORANGE', name: 'FruitHug',          image: 'Fruithug.jpeg' },
  { color: 'YELLOW', name: 'Zebra Tales',       image: 'Zebra.jpeg' },
  { color: 'PURPLE', name: 'Bunny & Bumble',    image: 'Bunny&Bumble.jpeg' },
];

const RING_COLORS = ['#FF85B3','#FFB347','#4FC3F7','#FF8C42','#A8E063','#CE93D8'];

/* ===== LOADER + ANNOUNCEMENT ===== */
const loader = $('#loader');
const ann = $('#ann');
const hideLoader = () => {
  loader.classList.add('out');
  setTimeout(() => {
    loader.remove();
    ann.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => ann.classList.add('ann-visible')));
  }, 900);
};
setTimeout(hideLoader, 3000);

$('#annContinue').onclick = () => {
  ann.classList.remove('ann-visible');
  setTimeout(() => { ann.hidden = true; }, 600);
};

/* ===== BUILD PATTERN CIRCLES ===== */
const annPatterns = $('#annPatterns');
PATTERNS.forEach((p, i) => {
  const btn = document.createElement('button');
  btn.className = 'ann-pat';
  btn.setAttribute('aria-label', p.color + ' – ' + p.name);

  const wrap = document.createElement('div');
  wrap.className = 'ann-pat-wrap';

  const ring = document.createElement('div');
  ring.className = 'ann-pat-ring';

  if (p.image) {
    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name;
    const ph = document.createElement('div');
    ph.className = 'ann-pat-ph';
    ph.style.background = RING_COLORS[i];
    ph.textContent = p.color + ' / ' + p.name;
    ring.appendChild(ph);
    img.onload = () => ph.remove();
    img.onerror = () => img.remove();
    ring.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.className = 'ann-pat-ph';
    ph.style.background = RING_COLORS[i];
    ph.textContent = p.color + ' / ' + p.name;
    ring.appendChild(ph);
  }

  wrap.appendChild(ring);

  const label = document.createElement('div');
  label.className = 'ann-pat-label';
  label.innerHTML = '<span class="ann-pat-color">' + p.color + '</span><span class="ann-pat-name">Pattern: ' + p.name + '</span>';

  btn.appendChild(wrap);
  btn.appendChild(label);

  btn.onclick = () => {
    document.querySelectorAll('.ann-pat').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  };

  annPatterns.appendChild(btn);
});

/* ===== NAV ===== */
const burger = $('#burger'), menu = $('#menu');
const setMenu = o => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', String(o)); };
burger.onclick = () => setMenu(!menu.classList.contains('open'));
menu.addEventListener('click', e => e.target.closest('a') && setMenu(false));
addEventListener('keydown', e => e.key === 'Escape' && menu.classList.contains('open') && (setMenu(false), burger.focus()));
$('#yr').textContent = new Date().getFullYear();

/* ===== STATE ===== */
const state = { cat: 'All' };

/* ===== COLLECTIONS GRID ===== */
$('#collGrid').append(...COLLECTIONS.map(c => {
  const b = el(
    '<button class="coll" style="background:var(' + c.bg + ')">' +
      '<div class="coll-thumb">' +
        imgTag(c.image, c.title) +
      '</div>' +
      '<h3>' + esc(c.title) + '</h3>' +
      '<p>' + esc(c.text) + '</p>' +
      '<span class="btn small">Explore</span>' +
    '</button>'
  );
  b.onclick = () => { state.cat = c.cat; render(); $('#products').scrollIntoView(); };
  return b;
}));

/* ===== BUILD PRODUCT CARDS ===== */
const cards = PRODUCTS.map((p, i) => {
  const accent = PASTELS[i % PASTELS.length];
  const c = el(
    '<article class="card" style="--acc:var(' + accent + ')">' +
      '<button class="thumb" aria-label="View ' + esc(p.name) + '">' + ph(p.name) + imgTag(p.image, p.name) + '</button>' +
      '<div class="card-info"><h3>' + esc(p.name) + '</h3></div>' +
      '<div class="row">' +
        '<button class="btn small enq">Enquire</button>' +
        '<button class="btn small ghost det">View Details</button>' +
      '</div>' +
    '</article>'
  );
  $('.thumb', c).onclick = () => openModal(p);
  $('.enq',   c).onclick = () => enquire(p);
  $('.det',   c).onclick = () => openModal(p);
  return c;
});
$('#grid').append(...cards);

/* ===== RENDER / FILTER ===== */
function render() {
  let n = 0;
  PRODUCTS.forEach((p, i) => {
    const show = state.cat === 'All' || p.category === state.cat;
    cards[i].hidden = !show;
    if (show) n++;
  });
  $('#empty').hidden = n > 0;
}
render();

/* ===== WHATSAPP ENQUIRE ===== */
function enquire(p) {
  const msg = 'Hello HONCHO BABY, I would like to enquire about ' + p.name + '. Could you please share availability and pricing details?';
  window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
}

/* ===== MODAL ===== */
const modal = $('#modal'), mBody = $('#mBody');
let opener = null;

function closeModal() {
  modal.hidden = true;
  mBody.innerHTML = '';
  document.body.style.overflow = '';
  if (opener) opener.focus();
}
$('#mClose').onclick = closeModal;
modal.addEventListener('mousedown', e => e.target === modal && closeModal());
addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') { closeModal(); return; }
  if (e.key === 'Tab') {
    const f = [...modal.querySelectorAll('button:not([disabled])')];
    const i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  }
});

function openModal(p) {
  opener = document.activeElement;
  mBody.innerHTML = '';

  // Pattern line — only if confirmed
  const patternLine = (p.patterns !== null && p.patterns !== undefined)
    ? '<p class="m-patterns">📐 ' + p.patterns + ' pattern' + (p.patterns !== 1 ? 's' : '') + ' available</p>'
    : '';

  // Colour swatches — only if confirmed
  const colourBlock = p.colors.length
    ? '<div class="m-swatch-row">' + swatchRow(p.colors, 'm-swatch') + '</div>' +
      '<p class="m-color-names">🎨 ' + p.colors.map(esc).join(' · ') + '</p>'
    : '';

  const desc = p.description || 'Please enquire for more details about this product.';

  mBody.append(el(
    '<div>' +
      '<div class="m-main">' + ph(p.name) + imgTag(p.image, p.name) + '</div>' +
      '<h3 id="mTitle">' + esc(p.name) + '</h3>' +
      '<p class="m-desc">' + esc(desc) + '</p>' +
      patternLine +
      colourBlock +
      '<button class="btn small" id="mEnq">Enquire on WhatsApp</button>' +
    '</div>'
  ));
  $('#mEnq').onclick = () => enquire(p);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  $('#mClose').focus();
}
