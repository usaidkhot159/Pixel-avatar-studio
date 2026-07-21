/**
 * draw-base.js — Background, neck, head shape, nose, mouth, brows.
 */

function drawBackground(ctx, s) {
  if (s.bgColor === 'transparent') { ctx.clearRect(0,0,32,32); return; }
  ctx.fillStyle = s.bgColor;
  ctx.fillRect(0,0,32,32);
}

function drawNeck(ctx, s) {
  const sk=s.skin, sh=darken(sk,20);
  rect(ctx,13,21,18,25,sk);
  vLine(ctx,13,21,25,sh);
  vLine(ctx,18,21,25,sh);
}

function drawHead(ctx, s) {
  const sk=s.skin, sh=darken(sk,22), hi=lighten(sk,22);
  // main face
  rect(ctx,9,5,22,20,sk);
  // top curve
  hLine(ctx,10,21,4,sk); hLine(ctx,11,20,3,sk); hLine(ctx,12,19,2,sk);
  // chin
  hLine(ctx,11,20,21,sk); hLine(ctx,12,19,22,sk);
  // side shadow
  vLine(ctx,9,7,18,sh); vLine(ctx,22,7,18,sh);
  // highlight
  px(ctx,10,9,hi); px(ctx,21,9,hi);
}

function drawEyebrows(ctx, s) {
  const c = darken(s.hairColor, 5);
  hLine(ctx,11,14,8,c); px(ctx,14,7,c);
  hLine(ctx,17,20,8,c); px(ctx,17,7,c);
}

function drawNose(ctx, s) {
  const sh = darken(s.skin,28);
  px(ctx,15,15,sh); px(ctx,16,15,sh);
  px(ctx,14,16,sh); px(ctx,17,16,sh);
  px(ctx,14,17,sh); px(ctx,17,17,sh);
}

function drawMouth(ctx, s) {
  hLine(ctx,13,18,19,'#b85050');
  hLine(ctx,14,17,20,'#cc6868');
  px(ctx,14,20,'#f5eeee'); px(ctx,15,20,'#f5eeee'); px(ctx,16,20,'#f5eeee');
  hLine(ctx,13,18,18,darken('#b85050',18));
}
