/**
 * thumbnails.js — Renders mini 52×52 avatar thumbnails for item cards.
 */

function renderMini(stateOverride) {
  const { canvas, ctx } = makeCtx(32, 32);
  const s = Object.assign({}, State, stateOverride);
  drawBackground(ctx, s);
  drawClothes(ctx, s);
  drawNeck(ctx, s);
  drawHead(ctx, s);
  drawHair(ctx, s);
  drawEyebrows(ctx, s);
  drawEyes(ctx, s);
  drawNose(ctx, s);
  drawMouth(ctx, s);
  drawBeard(ctx, s);
  drawGlasses(ctx, s);

  // Scale to 52×52 display canvas
  const { canvas: out, ctx: oc } = makeCtx(52, 52);
  oc.imageSmoothingEnabled = false;
  oc.drawImage(canvas, 0, 0, 52, 52);
  return out;
}

function thumbHair(i)    { return renderMini({ hairStyle:    i, bgColor: '#1A1D2E' }); }
function thumbEye(i)     { return renderMini({ eyeStyle:     i, bgColor: '#1A1D2E' }); }
function thumbGlasses(i) { return renderMini({ glassesStyle: i, bgColor: '#1A1D2E' }); }
function thumbBeard(i)   { return renderMini({ beardStyle:   i, bgColor: '#1A1D2E' }); }
function thumbClothes(i) { return renderMini({ clothesStyle: i, bgColor: '#1A1D2E' }); }
function thumbSkin(color){ return renderMini({ skin: color,      bgColor: '#1A1D2E' }); }
