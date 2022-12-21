var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let range = N;

for(let i = 0; i < range; i++){
  let line = lines.shift().split(' ')
  let x = parseInt(line[0])
  let y = parseInt(line[1])
    
  if(x > y) {
    [x, y] = [y, x]
  }
  let sum = 0
  for(let j = x + 1; j < y; j++) {
    if(j % 2 !== 0) {
      sum = sum + j
    }
  }
  console.log(sum)
}
