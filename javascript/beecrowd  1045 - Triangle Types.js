var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ')
let a = parseFloat(firstline[0])
let b = parseFloat(firstline[1])
let c = parseFloat(firstline[2])

let arr = [a, b, c];
arr.sort(function (a, b) {return a - b;}).reverse()

let A = arr[0];
let B = arr[1];
let C = arr[2];

if(A >= (B + C)) {
  console.log("NAO FORMA TRIANGULO")
} else if ((A*A) == ((B*B) + (C*C))) {
  console.log("TRIANGULO RETANGULO")
} else if ((A*A) > ((B*B) + (C*C))) {
  console.log("TRIANGULO OBTUSANGULO")
} else if ((A*A) < (B*B) + (C*C)) {
  console.log("TRIANGULO ACUTANGULO")
}
if ((A == B) && (B == C)) {
  console.log("TRIANGULO EQUILATERO")
} else if (((A == B) && (A != C)) || ((B == C) && (A != B)) || ((C == A) && (A != B))) {
  console.log ("TRIANGULO ISOSCELES")
}
