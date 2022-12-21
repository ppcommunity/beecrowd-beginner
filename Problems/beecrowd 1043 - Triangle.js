var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ')
let a = parseFloat(firstline[0])
let b = parseFloat(firstline[1])
let c = parseFloat(firstline[2])

if (b + c > a && a > b - c) {
  let perimetro = (a + b + c)
  console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
  let area = ((a + b) / 2) * c
  console.log(`Area = ${area.toFixed(1)}`);
}
