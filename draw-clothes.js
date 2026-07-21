/**
 * draw-clothes.js — 6 clothing styles.
 */
const ClothesStyles = [
  // 0 T-shirt
  (ctx,s)=>{
    const c=s.clothesColor,d=darken(c,22),hi=lighten(c,14);
    rect(ctx,6,25,25,32,c);
    rect(ctx,13,24,18,26,'#f0ece8'); hLine(ctx,13,18,24,darken('#f0ece8',15));
    rect(ctx,3,25,7,30,c); rect(ctx,24,25,28,30,c);
    vLine(ctx,7,25,30,d); vLine(ctx,24,25,30,d);
    hLine(ctx,7,24,28,d); vLine(ctx,15,26,31,hi);
  },
  // 1 Hoodie
  (ctx,s)=>{
    const c=s.clothesColor,d=darken(c,28),hi=lighten(c,12);
    rect(ctx,5,25,26,32,c);
    rect(ctx,9,23,22,26,d); rect(ctx,13,24,18,27,c);
    px(ctx,14,26,'#aaa'); px(ctx,17,26,'#aaa');
    rect(ctx,12,28,19,31,d); vLine(ctx,15,28,31,darken(d,10));
    rect(ctx,3,25,6,30,c); rect(ctx,25,25,28,30,c);
    hLine(ctx,3,6,30,d); hLine(ctx,25,28,30,d);
    vLine(ctx,15,26,27,hi);
  },
  // 2 Suit
  (ctx,s)=>{
    const c=s.clothesColor,d=darken(c,25);
    rect(ctx,6,24,25,32,c);
    rect(ctx,6,24,13,29,'#eeeef0'); vLine(ctx,13,24,29,d);
    rect(ctx,18,24,25,29,'#eeeef0'); vLine(ctx,18,24,29,d);
    rect(ctx,13,24,18,32,'#f5f5f0');
    rect(ctx,15,25,16,31,'#8B0000'); hLine(ctx,14,17,27,'#8B0000');
    for(let y=29;y<=31;y++) px(ctx,14,y,'#ccc');
    rect(ctx,4,24,7,31,c); rect(ctx,24,24,27,31,c);
    hLine(ctx,4,7,30,'#eeeef0'); hLine(ctx,24,27,30,'#eeeef0');
    rect(ctx,7,25,9,27,'#eeeef0');
  },
  // 3 Tank top
  (ctx,s)=>{
    const c=s.clothesColor,d=darken(c,20),hi=lighten(c,18);
    rect(ctx,9,24,22,32,c);
    rect(ctx,9,24,11,26,c); rect(ctx,20,24,22,26,c);
    hLine(ctx,11,20,24,d);
    vLine(ctx,9,24,32,d); vLine(ctx,22,24,32,d);
    vLine(ctx,15,25,32,hi); vLine(ctx,16,25,32,hi);
  },
  // 4 Varsity jacket
  (ctx,s)=>{
    const c=s.clothesColor,d=darken(c,20),con='#F5E6C8';
    rect(ctx,5,24,26,32,c);
    rect(ctx,11,23,20,26,con);
    rect(ctx,13,24,18,32,d); vLine(ctx,15,24,32,'#888');
    rect(ctx,3,24,6,31,c); rect(ctx,3,27,6,29,con);
    rect(ctx,25,24,28,31,c); rect(ctx,25,27,28,29,con);
    hLine(ctx,3,6,30,con); hLine(ctx,25,28,30,con);
    rect(ctx,19,27,23,30,darken(c,10));
  },
  // 5 Dress shirt
  (ctx,s)=>{
    const c=s.clothesColor,d=darken(c,20);
    rect(ctx,7,24,24,32,c);
    rect(ctx,11,23,15,26,'#f5f5f0'); rect(ctx,16,23,20,26,'#f5f5f0');
    rect(ctx,14,25,17,32,'#f5f5f0');
    for(let y=26;y<=31;y+=2) px(ctx,15,y,'#bbb');
    vLine(ctx,7,24,32,d); vLine(ctx,24,24,32,d);
    rect(ctx,4,24,8,31,c); rect(ctx,23,24,27,31,c);
    hLine(ctx,4,8,30,'#f5f5f0'); hLine(ctx,23,27,30,'#f5f5f0');
  },
];

function drawClothes(ctx,s){ (ClothesStyles[s.clothesStyle]||ClothesStyles[0])(ctx,s); }
