var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift()
let B = lines.shift()
let C = lines.shift()
let D = lines.shift()

let X = (A * B - C * D)

console.log(`DIFERENCA = ${X}`)