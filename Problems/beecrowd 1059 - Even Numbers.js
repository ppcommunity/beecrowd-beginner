var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = 100;
for (let i = 1; i <= a; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
