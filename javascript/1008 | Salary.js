var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift()
let B = lines.shift()
let C = lines.shift()

console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${(B*C).toFixed(2)}`)