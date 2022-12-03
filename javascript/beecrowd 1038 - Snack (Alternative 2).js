var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ');
let code = parseInt(firstline[0]);
let quantity = parseInt(firstline[1]);

let price;
switch(code) {
  case 1:
    price = 4;
    break;
  case 2:
    price = 4.5;
    break;
  case 3:
    price = 5;
    break;
  case 4:
    price = 2;
    break;
  case 5:
    price = 1.5;
    break;
}

let Total = (price * quantity);

console.log(`Total: R$ ${Total.toFixed(2)}`);