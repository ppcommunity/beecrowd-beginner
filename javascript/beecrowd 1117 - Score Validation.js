var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let range = lines.length

let num = 0
let sum = 0

for(let i=0; i<range; i++){
  if(lines[i]>0 && lines[i]<=10){
    num++
    sum = sum + parseFloat(lines[i])
    if(num == 2) {
      break;
    }
  }
  else{
    console.log('nota invalida')
  }
}
console.log(`media = ${(sum/num).toFixed(2)}`)