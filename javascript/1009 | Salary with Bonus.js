var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift()
let Salary = parseFloat(lines.shift())
let sales = parseFloat(lines.shift())
let bonus = (sales*15/100)
let result = (Salary + bonus)
console.log(`TOTAL = R$ ${result.toFixed(2)}`)