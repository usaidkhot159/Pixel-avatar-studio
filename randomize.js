/**
 * randomize.js — Random avatar generator and reset.
 */

function pick(arr)      { return arr[Math.floor(Math.random() * arr.length)]; }
function pickIdx(max)   { return Math.floor(Math.random() * max); }

function randomizeAvatar() {
  const hair = pick(Colors.hair);
  setState({
    skin:         pick(Colors.skin),
    hairStyle:    pickIdx(8),
    hairColor:    hair,
    eyeStyle:     pickIdx(5),
    eyeColor:     pick(Colors.eye),
    glassesStyle: Math.random() < 0.35 ? pickIdx(5) : 0,
    beardStyle:   Math.random() < 0.4  ? pickIdx(6) : 0,
    beardColor:   hair,
    clothesStyle: pickIdx(6),
    clothesColor: pick(Colors.clothes),
  });

  // Rebuild shop for current category
  buildShop(_currentCat);

  const frame = document.querySelector('.avatar-frame');
  if (frame) {
    frame.classList.remove('spin');
    void frame.offsetWidth;
    frame.classList.add('spin');
    setTimeout(() => frame.classList.remove('spin'), 500);
  }
  showToast('Random avatar generated!', '🎲', 2000);
}

function resetAvatar() {
  setState({
    skin:         '#F0C27F',
    hairStyle:    1,
    hairColor:    '#1C1008',
    eyeStyle:     0,
    eyeColor:     '#2E86AB',
    glassesStyle: 0,
    beardStyle:   0,
    beardColor:   '#1C1008',
    clothesStyle: 0,
    clothesColor: '#1565C0',
    bgColor:      '#0F1220',
  });

  buildShop(_currentCat);
  buildBgSwatches();
  showToast('Avatar reset', '↺', 1800);
}

function initRandomize() {
  document.getElementById('btnRandomize').addEventListener('click', randomizeAvatar);
  document.getElementById('btnReset')    .addEventListener('click', resetAvatar);
}
