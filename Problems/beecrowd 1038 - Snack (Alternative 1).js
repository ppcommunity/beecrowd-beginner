var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let firstline = lines.shift().split(' ');
let code = parseInt(firstline[0]);
let quantity = parseInt(firstline[1]);
let price;
let priceList = [4, 4.5, 5, 2, 1.5];
for(let i = 0; i < 5; i++) {
  if(code == i + 1) {
    price = priceList[i];
  }
}
let Total = (price * quantity);

console.log(`Total: R$ ${Total.toFixed(2)}`);