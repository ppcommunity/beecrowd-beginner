var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ');
let code = parseInt(firstline[0]);
let quantity = parseInt(firstline[1]);

let price;
if (code == 1) {
  price = 4;
} else if (code == 2) {
  price = 4.5;
} else if (code == 3) {
  price = 5;
} else if (code == 4) {
  price = 2;
} else if (code == 5) {
  price = 1.5;
}

let Total = (price * quantity);

console.log(`Total: R$ ${Total.toFixed(2)}`);