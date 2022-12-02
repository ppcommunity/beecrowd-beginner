var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const firstLine = lines.shift().split(' ');
const secondLine = lines.shift().split(' ');
let code1 = parseInt(firstLine[0]);
let unit1 = parseInt(firstLine[1]);
let price1 = parseFloat(firstLine[2]);

let code2 = parseInt(secondLine[0]);
let unit2 = parseInt(secondLine[1]);
let price2 = parseFloat(secondLine[2]);

let totalPrice = (unit1 * price1) + (unit2 * price2)

console.log(`VALOR A PAGAR: R$ ${totalPrice.toFixed(2)}`)
