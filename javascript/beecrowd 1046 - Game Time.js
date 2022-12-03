var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline =lines.shift().split(' ')

let A = parseInt(firstline[0]);
let B = parseInt(firstline[1]);

const time = 24;

if (A >= B){
  let C = (time - A)+B;
  console.log(`O JOGO DUROU ${C} HORA(S)`);
} else if (B>A){
  let D = (B-A);
  console.log(`O JOGO DUROU ${D} HORA(S)`);
}