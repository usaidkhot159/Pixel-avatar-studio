/**
 * draw-glasses.js — 5 glasses styles (none + 4).
 */
const GlassesStyles = [
  ()=>{},
  // 1 Round
  (ctx)=>{
    const fc='#6a6a7a',gl='rgba(160,220,255,0.28)';
    ctx.fillStyle=gl; ctx.fillRect(10,10,5,4); ctx.fillRect(17,10,5,4);
    hLine(ctx,10,14,10,fc); hLine(ctx,10,14,13,fc); vLine(ctx,10,10,13,fc); vLine(ctx,14,10,13,fc);
    hLine(ctx,17,21,10,fc); hLine(ctx,17,21,13,fc); vLine(ctx,17,10,13,fc); vLine(ctx,21,10,13,fc);
    hLine(ctx,15,16,11,fc); vLine(ctx,9,10,11,fc); vLine(ctx,22,10,11,fc);
  },
  // 2 Square
  (ctx)=>{
    const fc='#3a3a4a',gl='rgba(160,220,255,0.20)';
    ctx.fillStyle=gl; ctx.fillRect(10,10,6,5); ctx.fillRect(17,10,6,5);
    hLine(ctx,10,15,10,fc); hLine(ctx,10,15,14,fc); vLine(ctx,10,10,14,fc); vLine(ctx,15,10,14,fc);
    hLine(ctx,17,22,10,fc); hLine(ctx,17,22,14,fc); vLine(ctx,17,10,14,fc); vLine(ctx,22,10,14,fc);
    hLine(ctx,16,16,12,fc); vLine(ctx,9,10,12,fc); vLine(ctx,23,10,12,fc);
  },
  // 3 Sunglasses
  (ctx)=>{
    const fc='#111',gl='rgba(0,0,0,0.80)';
    ctx.fillStyle=gl; ctx.fillRect(10,10,5,4); ctx.fillRect(17,10,5,4);
    hLine(ctx,10,14,10,fc); hLine(ctx,10,14,13,fc); vLine(ctx,10,10,13,fc); vLine(ctx,14,10,13,fc);
    hLine(ctx,17,21,10,fc); hLine(ctx,17,21,13,fc); vLine(ctx,17,10,13,fc); vLine(ctx,21,10,13,fc);
    hLine(ctx,15,16,11,'#555'); vLine(ctx,9,10,11,fc); vLine(ctx,22,10,11,fc);
    px(ctx,11,11,'rgba(255,255,255,0.4)'); px(ctx,12,11,'rgba(255,255,255,0.2)');
    px(ctx,18,11,'rgba(255,255,255,0.4)');
  },
  // 4 Cat-eye
  (ctx)=>{
    const fc='#7B3F8A',gl='rgba(210,130,255,0.25)';
    ctx.fillStyle=gl; ctx.fillRect(10,11,5,3); ctx.fillRect(17,11,5,3);
    hLine(ctx,10,14,11,fc); hLine(ctx,10,14,13,fc); vLine(ctx,10,11,13,fc); vLine(ctx,14,11,13,fc);
    px(ctx,14,10,fc); px(ctx,13,10,fc);
    hLine(ctx,17,21,11,fc); hLine(ctx,17,21,13,fc); vLine(ctx,17,11,13,fc); vLine(ctx,21,11,13,fc);
    px(ctx,21,10,fc); px(ctx,20,10,fc);
    hLine(ctx,15,16,12,fc); vLine(ctx,9,11,12,fc); vLine(ctx,22,11,12,fc);
  },
];

function drawGlasses(ctx,s){ (GlassesStyles[s.glassesStyle]||GlassesStyles[0])(ctx,s); }
