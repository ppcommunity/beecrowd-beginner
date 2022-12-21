var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines[0]);

const n = parseInt(number / 2);

for(let i = n; i < n + 6; i++) {
  console.log(2 * i + 1);
}
