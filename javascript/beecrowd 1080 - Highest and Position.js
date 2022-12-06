var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let max = Number(lines[0]);

let position = 0;

for(let i=1; i<100; i++){
  if (max<lines[i]){
    max = Number(lines[i])
    position = i+1
  }
}
console.log(max)
console.log(position)
