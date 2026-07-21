/**
 * draw-utils.js — Low-level pixel helpers for a 32×32 canvas.
 */

function px(ctx, x, y, c)            { ctx.fillStyle=c; ctx.fillRect(x,y,1,1); }
function rect(ctx,x1,y1,x2,y2,c)    { ctx.fillStyle=c; ctx.fillRect(x1,y1,x2-x1+1,y2-y1+1); }
function hLine(ctx,x1,x2,y,c)       { ctx.fillStyle=c; ctx.fillRect(x1,y,x2-x1+1,1); }
function vLine(ctx,x,y1,y2,c)       { ctx.fillStyle=c; ctx.fillRect(x,y1,1,y2-y1+1); }

function darken(hex, amt=35) {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgb(${Math.max(0,r-amt)},${Math.max(0,g-amt)},${Math.max(0,b-amt)})`;
}
function lighten(hex, amt=35) {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgb(${Math.min(255,r+amt)},${Math.min(255,g+amt)},${Math.min(255,b+amt)})`;
}

function makeCtx(w, h) {
  const c = document.createElement('canvas');
  c.width=w; c.height=h;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { canvas:c, ctx };
}
