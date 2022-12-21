var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let num1 = Number(lines[0])
let num2 = Number(lines[1])
let num3 = Number(lines[2])

function MaiorAB(a, b) {
  return (a + b + Math.abs(a - b)) / 2;
}

let max = MaiorAB(MaiorAB(num1, num2), num3);

console.log(`${max} eh o maior`);
