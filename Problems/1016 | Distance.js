var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let minute = Number(lines.shift());
console.log(`${minute * 2} minutos`);
