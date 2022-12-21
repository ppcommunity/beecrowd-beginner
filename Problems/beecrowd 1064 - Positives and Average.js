var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = 0, sum = 0;
for(let i = 0; i < lines.length; i++) {
  if(lines[i] > 0){
    num++;
    sum = sum + parseFloat(lines[i]);
  }
}
let average = sum / num;
console.log(`${num} valores positivos`);
console.log(average.toFixed(1));