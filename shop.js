/**
 * shop.js — Builds the right-panel item grid and colour strip.
 */

// Category definitions
const CATEGORIES = {
  hair: {
    title: 'Hair Style',
    sub:   'Choose your hairstyle',
    colorKey: 'hairColor',
    colorPalette: 'hair',
    stateKey: 'hairStyle',
    count: 8,
    labels: ['Bald','Short Crop','Long','Mohawk','Curly','Bun','Spiky','Undercut'],
    makeThumb: thumbHair,
  },
  face: {
    title: 'Eye Style',
    sub:   'Choose your eyes',
    colorKey: 'eyeColor',
    colorPalette: 'eye',
    stateKey: 'eyeStyle',
    count: 5,
    labels: ['Classic','Wide','Sleepy','Happy','Wink'],
    makeThumb: thumbEye,
  },
  glasses: {
    title: 'Glasses',
    sub:   'Add some eyewear',
    colorKey: null,
    stateKey: 'glassesStyle',
    count: 5,
    labels: ['None','Round','Square','Sunglasses','Cat-eye'],
    makeThumb: thumbGlasses,
  },
  beard: {
    title: 'Facial Hair',
    sub:   'Style your beard',
    colorKey: 'beardColor',
    colorPalette: 'beard',
    stateKey: 'beardStyle',
    count: 6,
    labels: ['Clean','Stubble','Full Beard','Mustache','Goatee','Soul Patch'],
    makeThumb: thumbBeard,
  },
  clothes: {
    title: 'Outfit',
    sub:   'Pick your style',
    colorKey: 'clothesColor',
    colorPalette: 'clothes',
    stateKey: 'clothesStyle',
    count: 6,
    labels: ['T-Shirt','Hoodie','Suit','Tank Top','Varsity','Dress Shirt'],
    makeThumb: thumbClothes,
  },
  skin: {
    title: 'Skin Tone',
    sub:   'Choose your complexion',
    colorKey: null,
    stateKey: null,
    count: 8,
    labels: Colors.skin.map((_,i)=>`Tone ${i+1}`),
    makeThumb: thumbSkin,
    isSkinPicker: true,
  },
};

let _currentCat = 'hair';

/** Build the shop grid for a given category key. */
function buildShop(catKey) {
  _currentCat = catKey;
  const cat = CATEGORIES[catKey];
  if (!cat) return;

  // Header
  document.getElementById('shopCatTitle').textContent = cat.title;
  document.getElementById('shopCatSub').textContent   = cat.sub;

  // Colour strip
  const strip = document.getElementById('colorStrip');
  const colorRow = document.getElementById('colorRow');
  if (cat.colorKey && cat.colorPalette) {
    strip.style.display = '';
    buildColorRow(cat.colorKey, cat.colorPalette);
  } else {
    strip.style.display = 'none';
    colorRow.innerHTML  = '';
  }

  // Item grid
  const grid = document.getElementById('shopGrid');
  grid.innerHTML = '';

  if (cat.isSkinPicker) {
    // Skin tones: cards showing mini avatar
    Colors.skin.forEach((color, i) => {
      const card = makeItemCard({
        thumb: thumbSkin(color),
        name:  cat.labels[i],
        active: State.skin === color,
        onClick: () => {
          setState({ skin: color });
          buildShop(catKey);
        },
        delay: i,
      });
      grid.appendChild(card);
    });
  } else {
    // Style items
    for (let i = 0; i < cat.count; i++) {
      const isActive = State[cat.stateKey] === i;
      const card = makeItemCard({
        thumb: cat.makeThumb(i),
        name:  cat.labels[i],
        active: isActive,
        onClick: () => {
          setState({ [cat.stateKey]: i });
          // Rebuild grid to update active state
          buildShop(catKey);
          // Also rebuild thumbs to reflect colour changes
        },
        delay: i,
      });
      grid.appendChild(card);
    }
  }
}

/** Build colour dot row. */
function buildColorRow(colorKey, paletteKey) {
  const row = document.getElementById('colorRow');
  row.innerHTML = '';
  Colors[paletteKey].forEach(color => {
    const dot = document.createElement('div');
    dot.className = 'color-dot' + (State[colorKey] === color ? ' active' : '');
    dot.style.background = color;
    dot.title = color;
    dot.addEventListener('click', () => {
      setState({ [colorKey]: color });
      // refresh dots
      row.querySelectorAll('.color-dot').forEach((d, j) => {
        d.classList.toggle('active', Colors[paletteKey][j] === color);
      });
      // rebuild grid thumbs to reflect new colour
      buildShop(_currentCat);
    });
    row.appendChild(dot);
  });
}

/** Create a single item card element. */
function makeItemCard({ thumb, name, active, onClick, delay }) {
  const card = document.createElement('div');
  card.className = 'item-card' + (active ? ' active' : '');
  card.style.animationDelay = `${delay * 28}ms`;

  thumb.className = 'item-thumb';
  card.appendChild(thumb);

  const lbl = document.createElement('div');
  lbl.className   = 'item-name';
  lbl.textContent = name;
  card.appendChild(lbl);

  card.addEventListener('click', () => {
    onClick();
    // Frame bounce
    const frame = document.querySelector('.avatar-frame');
    if (frame) { frame.classList.remove('bounce'); void frame.offsetWidth; frame.classList.add('bounce'); setTimeout(()=>frame.classList.remove('bounce'),450); }
  });
  return card;
}

/** Called by state changes to refresh colour dots without full rebuild. */
function onStateChange(patch) {
  const cat = CATEGORIES[_currentCat];
  if (!cat || !cat.colorKey || !patch[cat.colorKey]) return;
}
