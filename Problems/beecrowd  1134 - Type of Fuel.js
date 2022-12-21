var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let range = lines.length

console.log("MUITO OBRIGADO")
let al=0
let gas=0
let di=0

for (let i=0; i<=range; i++){
  if(lines[i]==1){
    al++
  }
  else if (lines[i]==2){
    gas++
     }
  else if(lines[i]==3){
    di++
  }
   else if(lines[i]==4){
     break
  }
}
console.log(`Alcool: ${al}`)
console.log(`Gasolina: ${gas}`)
console.log(`Diesel: ${di}`)