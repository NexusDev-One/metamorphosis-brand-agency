const fs = require('fs');
const p = 'd:/---PROJECTS---/PORTFOLIO/Metamorphosis Studio — Brand Transformation Portfolio/src/components/Hero.tsx';
let s = fs.readFileSync(p, 'utf8');
const oldSeg = `          <span\n            className="italic font-light"\n            style={{\n              background: "linear-gradient(135deg, #C4622D, #E8A87C, #7C3AED)",\n              WebkitBackgroundClip: "text",\n              WebkitTextFillColor: "transparent",\n            }}\n          >\n            Metamorphosis\n          </span>\n`;
if(s.indexOf(oldSeg) !== -1){
  const newSeg = oldSeg.replace('font-light','font-bold');
  s = s.replace(oldSeg, newSeg);
  fs.writeFileSync(p, s, 'utf8');
  console.log('patched');
} else {
  console.error('segment not found');
  process.exit(1);
}
