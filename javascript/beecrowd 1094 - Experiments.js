var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const testCases = parseInt(lines.shift());

let animals = 0;
let Coelho = 0;
let Rato = 0;
let Sapo = 0;
for(let i = 0; i < testCases; ++i) {
  let line = lines.shift().split(' ');
  animals = animals + parseInt(line[0]);
  if(line[1] == "C") {
    Coelho += parseInt(line[0]);
  }
  if(line[1] == "R") {
    Rato += parseInt(line[0]);
  }
  if(line[1] == "S") {
    Sapo += parseInt(line[0]);
  }
}
console.log(`Total: ${animals} cobaias`);
console.log(`Total de coelhos: ${Coelho}`);
console.log(`Total de ratos: ${Rato}`);
console.log(`Total de sapos: ${Sapo}`);

console.log(`Percentual de coelhos: ${((Coelho * 100) / animals).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((Rato * 100) / animals).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((Sapo * 100) / animals).toFixed(2)} %`);
