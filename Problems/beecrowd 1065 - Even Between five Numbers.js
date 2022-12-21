var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let count = 0
for(let i=0; i<5; i++){
  if(lines[i] % 2 == 0){
    count++
   }
}
console.log(`${count} valores pares`)
