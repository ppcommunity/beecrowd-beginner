var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
console.log(number);
console.log(`${parseInt(number/100)} nota(s) de R$ 100,00`);
number = number % 100;
console.log(`${parseInt(number/50)} nota(s) de R$ 50,00`);
number = number % 50;
console.log(`${parseInt(number/20)} nota(s) de R$ 20,00`);
number = number % 20;
console.log(`${parseInt(number/10)} nota(s) de R$ 10,00`);
number = number % 10;
console.log(`${parseInt(number/5)} nota(s) de R$ 5,00`);
number = number % 5;
console.log(`${parseInt(number/2)} nota(s) de R$ 2,00`);
number = number % 2;
console.log(`${parseInt(number/1)} nota(s) de R$ 1,00`);
