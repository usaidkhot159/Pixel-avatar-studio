/**
 * draw-eyes.js — 5 eye styles.
 */
const EyeStyles = [
  // 0 Classic
  (ctx,s)=>{
    const ec=s.eyeColor;
    rect(ctx,11,11,14,13,'#f8f4f0'); rect(ctx,17,11,20,13,'#f8f4f0');
    rect(ctx,12,12,13,13,ec);        rect(ctx,18,12,19,13,ec);
    px(ctx,12,12,'#111'); px(ctx,18,12,'#111');
    px(ctx,13,12,'#fff'); px(ctx,19,12,'#fff');
    hLine(ctx,11,14,10,'#222'); hLine(ctx,17,20,10,'#222');
    vLine(ctx,11,11,13,'#333'); vLine(ctx,14,11,13,'#333');
    vLine(ctx,17,11,13,'#333'); vLine(ctx,20,11,13,'#333');
    hLine(ctx,11,14,13,'#333'); hLine(ctx,17,20,13,'#333');
  },
  // 1 Wide
  (ctx,s)=>{
    const ec=s.eyeColor;
    rect(ctx,10,10,14,14,'#f8f4f0'); rect(ctx,17,10,21,14,'#f8f4f0');
    rect(ctx,11,11,13,13,ec); rect(ctx,18,11,20,13,ec);
    px(ctx,11,11,'#111'); px(ctx,18,11,'#111');
    px(ctx,13,12,'#fff'); px(ctx,20,12,'#fff');
    hLine(ctx,10,14,9,'#222'); hLine(ctx,17,21,9,'#222');
    for(let y=10;y<=14;y++){ px(ctx,10,y,'#333'); px(ctx,14,y,'#333'); px(ctx,17,y,'#333'); px(ctx,21,y,'#333'); }
    hLine(ctx,10,14,14,'#333'); hLine(ctx,17,21,14,'#333');
  },
  // 2 Sleepy
  (ctx,s)=>{
    const ec=s.eyeColor;
    rect(ctx,11,12,14,13,'#f8f4f0'); rect(ctx,17,12,20,13,'#f8f4f0');
    rect(ctx,12,12,13,13,ec); rect(ctx,18,12,19,13,ec);
    px(ctx,12,12,'#111'); px(ctx,18,12,'#111');
    hLine(ctx,11,14,11,darken(s.skin,12)); hLine(ctx,17,20,11,darken(s.skin,12));
    hLine(ctx,11,14,10,'#222'); hLine(ctx,17,20,10,'#222');
    hLine(ctx,11,14,13,'#333'); hLine(ctx,17,20,13,'#333');
  },
  // 3 Happy
  (ctx,s)=>{
    px(ctx,11,13,'#222'); hLine(ctx,12,13,12,'#222'); px(ctx,14,13,'#222');
    px(ctx,11,12,'#222'); px(ctx,14,12,'#222');
    px(ctx,17,13,'#222'); hLine(ctx,18,19,12,'#222'); px(ctx,20,13,'#222');
    px(ctx,17,12,'#222'); px(ctx,20,12,'#222');
    px(ctx,10,15,'#f9a8a8'); px(ctx,11,15,'#f9a8a8');
    px(ctx,20,15,'#f9a8a8'); px(ctx,21,15,'#f9a8a8');
  },
  // 4 Wink
  (ctx,s)=>{
    const ec=s.eyeColor;
    hLine(ctx,11,14,12,'#222'); px(ctx,12,11,'#222'); px(ctx,13,11,'#222');
    rect(ctx,17,11,20,13,'#f8f4f0');
    rect(ctx,18,12,19,13,ec); px(ctx,18,12,'#111'); px(ctx,20,12,'#fff');
    hLine(ctx,17,20,10,'#222');
    vLine(ctx,17,11,13,'#333'); vLine(ctx,20,11,13,'#333');
    hLine(ctx,17,20,13,'#333');
  },
];

function drawEyes(ctx,s){ (EyeStyles[s.eyeStyle]||EyeStyles[0])(ctx,s); }
