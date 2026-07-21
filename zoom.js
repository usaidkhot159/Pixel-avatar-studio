/**
 * zoom.js — Canvas zoom and background scene controls.
 */

const ZOOM_STEPS = [128, 160, 192, 224, 256, 288];
let _zoomIdx = 3; // default 224px

function initZoom() {
  document.getElementById('zoomIn') .addEventListener('click', () => changeZoom(1));
  document.getElementById('zoomOut').addEventListener('click', () => changeZoom(-1));
  applyZoom();
  buildBgSwatches();
}

function changeZoom(dir) {
  _zoomIdx = Math.max(0, Math.min(ZOOM_STEPS.length - 1, _zoomIdx + dir));
  applyZoom();
}

function applyZoom() {
  const sz = ZOOM_STEPS[_zoomIdx];
  const cv = document.getElementById('avatarCanvas');
  cv.style.width  = sz + 'px';
  cv.style.height = sz + 'px';
  const pct = Math.round((sz / 224) * 100);
  document.getElementById('zoomLabel').textContent = pct + '%';
  document.getElementById('zoomOut').disabled = _zoomIdx === 0;
  document.getElementById('zoomIn') .disabled = _zoomIdx === ZOOM_STEPS.length - 1;
}

const BG_SCENES = [
  { color: '#0F1220', label: 'Night' },
  { color: '#000000', label: 'Black' },
  { color: '#0D2137', label: 'Ocean' },
  { color: '#1A082A', label: 'Purple' },
  { color: '#0F2018', label: 'Forest' },
  { color: 'transparent', label: 'None' },
];

function buildBgSwatches() {
  const cont = document.getElementById('bgOptions');
  cont.innerHTML = '';
  BG_SCENES.forEach(({ color, label }) => {
    const div = document.createElement('div');
    div.className = 'bg-swatch' + (State.bgColor === color ? ' active' : '');
    div.title = label;
    if (color === 'transparent') {
      div.style.background = 'repeating-conic-gradient(#444 0% 25%, #222 0% 50%) 0 0/8px 8px';
    } else {
      div.style.background = color;
    }
    div.addEventListener('click', () => {
      setState({ bgColor: color });
      cont.querySelectorAll('.bg-swatch').forEach((s,i) => s.classList.toggle('active', BG_SCENES[i].color === color));
    });
    cont.appendChild(div);
  });
}
