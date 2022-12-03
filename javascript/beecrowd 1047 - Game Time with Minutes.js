var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ')

let A1 = parseInt(firstline[0]);
let B1 = parseInt(firstline[1]);
let A2 = parseInt(firstline[2]);
let B2 = parseInt(firstline[3]);

const time = 60;
const day = 24;
 
let t1 = ((time*A1)+B1)
let t2 = ((time*A2)+B2)
let t3 = day * time;
if (t2 > t1) {
  const result = t2 - t1;
  let hour = parseInt(result/time);
  console.log(`O JOGO DUROU ${hour} HORA(S) E ${result - (hour * time)} MINUTO(S)`);
} else if(t1 >= t2) {
  const result = t3 - t1 + t2;
  let hour = parseInt(result/time);
  console.log(`O JOGO DUROU ${hour} HORA(S) E ${result - (hour * time)} MINUTO(S)`);
}