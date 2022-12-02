var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines.shift())
const PI = 3.14159;
let Volume = (4 / 3) * PI * R * R * R;
console.log(`VOLUME = ${Volume.toFixed(3)}`);
