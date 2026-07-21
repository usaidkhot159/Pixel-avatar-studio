/**
 * draw-beard.js — 6 beard styles.
 */
const BeardStyles = [
  // 0 None
  ()=>{},
  // 1 Stubble
  (ctx,s)=>{ const c=s.beardColor; for(let x=11;x<=20;x+=2) px(ctx,x,19,c); for(let x=10;x<=21;x+=2) px(ctx,x,20,c); for(let x=12;x<=19;x+=2) px(ctx,x,21,c); },
  // 2 Full beard
  (ctx,s)=>{
    const c=s.beardColor,d=darken(c,20),hi=lighten(c,14);
    rect(ctx,10,18,21,25,c); hLine(ctx,11,20,26,c); hLine(ctx,12,19,27,c);
    rect(ctx,12,18,19,19,hi);
    for(let x=10;x<=21;x+=2) px(ctx,x,20,d);
    for(let x=11;x<=20;x+=2) px(ctx,x,22,d);
  },
  // 3 Mustache
  (ctx,s)=>{
    const c=s.beardColor,d=darken(c,15);
    rect(ctx,12,18,19,19,c);
    px(ctx,12,20,c); px(ctx,19,20,c);
    px(ctx,15,18,d); px(ctx,16,18,d);
    px(ctx,13,18,lighten(c,20)); px(ctx,18,18,lighten(c,20));
  },
  // 4 Goatee
  (ctx,s)=>{
    const c=s.beardColor,d=darken(c,15);
    rect(ctx,12,18,19,19,c); px(ctx,15,18,d); px(ctx,16,18,d);
    rect(ctx,13,20,18,24,c); rect(ctx,12,21,19,23,c);
  },
  // 5 Soul patch
  (ctx,s)=>{ rect(ctx,14,21,17,24,s.beardColor); px(ctx,15,21,lighten(s.beardColor,20)); },
];

function drawBeard(ctx,s){ (BeardStyles[s.beardStyle]||BeardStyles[0])(ctx,s); }
