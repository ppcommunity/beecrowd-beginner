var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let time = parseInt(lines.shift())
let speed = parseInt(lines.shift())

let distance = time * speed
let fuelSpent = distance / 12

console.log(`${fuelSpent.toFixed(3)}`);
