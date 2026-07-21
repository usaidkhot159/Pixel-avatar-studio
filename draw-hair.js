/**
 * draw-hair.js — 8 pixel-art hair styles.
 */
const HairStyles = [
  // 0 Bald
  (ctx,s)=>{ const d=darken(s.skin,10); for(let x=10;x<=21;x+=2) for(let y=3;y<=7;y+=2) px(ctx,x,y,d); },

  // 1 Short crop
  (ctx,s)=>{
    const c=s.hairColor,d=darken(c,22);
    rect(ctx,9,3,22,8,c);
    hLine(ctx,10,21,2,c); hLine(ctx,11,20,1,c);
    vLine(ctx,9,5,10,c); vLine(ctx,22,5,10,c);
    for(let x=10;x<=21;x+=3) px(ctx,x,4,d);
  },

  // 2 Long
  (ctx,s)=>{
    const c=s.hairColor,d=darken(c,20),hi=lighten(c,18);
    rect(ctx,8,2,23,8,c);
    hLine(ctx,10,21,1,c); hLine(ctx,11,20,0,c);
    rect(ctx,7,8,9,24,c); rect(ctx,23,8,25,24,c);
    for(let y=10;y<=22;y+=3){ px(ctx,7,y,d); px(ctx,25,y,d); px(ctx,8,y+1,hi); px(ctx,24,y+1,hi); }
    hLine(ctx,12,19,2,hi);
  },

  // 3 Mohawk
  (ctx,s)=>{
    const c=s.hairColor,hi=lighten(c,50);
    rect(ctx,9,6,11,9,darken(s.skin,12));
    rect(ctx,21,6,23,9,darken(s.skin,12));
    rect(ctx,13,0,18,8,c);
    hLine(ctx,14,17,0,darken(c,20));
    vLine(ctx,15,0,4,hi); vLine(ctx,17,0,3,hi);
  },

  // 4 Curly
  (ctx,s)=>{
    const c=s.hairColor,d=darken(c,25),hi=lighten(c,22);
    rect(ctx,6,1,25,9,c);
    hLine(ctx,8,23,0,c);
    rect(ctx,6,6,8,14,c); rect(ctx,24,6,26,14,c);
    for(let y=1;y<=8;y+=2) for(let x=7;x<=24;x+=2) px(ctx,x,y,(x+y)%4===0?hi:d);
  },

  // 5 Bun
  (ctx,s)=>{
    const c=s.hairColor,d=darken(c,22);
    rect(ctx,9,5,22,8,c);
    vLine(ctx,9,5,11,c); vLine(ctx,22,5,11,c);
    rect(ctx,13,0,18,4,c); hLine(ctx,12,19,1,c);
    rect(ctx,13,3,18,4,d); px(ctx,15,1,lighten(c,30));
  },

  // 6 Spiky
  (ctx,s)=>{
    const c=s.hairColor,hi=lighten(c,42),d=darken(c,20);
    rect(ctx,9,5,22,8,c);
    [[10,2],[13,0],[15,1],[18,0],[21,2]].forEach(([x,y])=>{
      rect(ctx,x,y,x+2,7,c); px(ctx,x+1,y,hi); px(ctx,x,y+1,d);
    });
  },

  // 7 Undercut
  (ctx,s)=>{
    const c=s.hairColor,d=darken(c,20),hi=lighten(c,20);
    hLine(ctx,9,22,9,darken(s.skin,12));
    rect(ctx,9,2,22,7,c);
    rect(ctx,17,2,24,6,c); hLine(ctx,17,24,1,c);
    for(let x=10;x<=22;x+=2) px(ctx,x,3,d);
    hLine(ctx,17,22,2,hi);
  },
];

function drawHair(ctx,s){ (HairStyles[s.hairStyle]||HairStyles[1])(ctx,s); }
