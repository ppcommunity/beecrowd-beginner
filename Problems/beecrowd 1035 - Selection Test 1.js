var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const firstLine = lines.shift().split(' ');
let A = firstLine[0];
let B = firstLine[1];
let C = firstLine[2];
let D = firstLine[3];

if ((B > C) && (D > A) && ((A + B) < (C + D)) && (C > 0) && (D > 0) && (A % 2 == 0)){
  console.log ("Valores aceitos")
} else {
  console.log("Valores nao aceitos")   
}
