/**
 * renderer.js — Composites all draw layers onto the main canvas.
 */
let _mainCanvas, _mainCtx;

function initRenderer() {
  _mainCanvas = document.getElementById('avatarCanvas');
  _mainCtx    = _mainCanvas.getContext('2d');
  _mainCtx.imageSmoothingEnabled = false;
}

function renderAvatar() {
  if (!_mainCtx) return;
  const s = State;
  _mainCtx.clearRect(0,0,32,32);
  drawBackground(_mainCtx, s);
  drawClothes(_mainCtx, s);
  drawNeck(_mainCtx, s);
  drawHead(_mainCtx, s);
  drawHair(_mainCtx, s);
  drawEyebrows(_mainCtx, s);
  drawEyes(_mainCtx, s);
  drawNose(_mainCtx, s);
  drawMouth(_mainCtx, s);
  drawBeard(_mainCtx, s);
  drawGlasses(_mainCtx, s);
}
