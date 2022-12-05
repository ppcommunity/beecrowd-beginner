var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0

for(let i=0; i<5; i++){
  if(lines[i] % 2 == 0){
    count1++
   }
  else if(lines[i]%2!=0){
    count2++
  }
  if(lines[i]>0){
    count3++
  }
  else if(lines[i]<0){
    count4++
  }
}
console.log(`${count1} valor(es) par(es)`)
console.log(`${count2} valor(es) impar(es)`)
console.log(`${count3} valor(es) positivo(s)`)
console.log(`${count4} valor(es) negativo(s)`)
