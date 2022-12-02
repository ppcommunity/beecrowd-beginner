var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines.shift()), years, months, days;
years = parseInt(N / 365);
months = parseInt((N - (years * 365)) / 30);
days = N - (years * 365) - (months * 30);

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);
