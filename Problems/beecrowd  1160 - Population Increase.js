var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tc = Number(lines.shift());

for(let i = 0; i < tc; i++) {
  let line = lines[i].split(' ')
  let PA = Number(line[0]);
  let PB = Number(line[1]);
  let G1 = Number(line[2]);
  let G2 = Number(line[3]);
  
  let year = 0;
  do {
    g1 = parseInt(PA * (G1 / 100));
    PA += g1;
    
    g2 = parseInt(PB * (G2 / 100));
    PB += g2;
    year++;
  } while(PA <= PB && year < 101)
  if(year > 100) {
    console.log('Mais de 1 seculo.');
  } else {
    console.log(`${year} anos.`);
  }
}