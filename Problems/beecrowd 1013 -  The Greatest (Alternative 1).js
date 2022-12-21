var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let range = lines.length
let largest = Number(lines[0])

for(let i = 0; i < range; i++){
  if (largest < Number(lines[i])) {
    	largest = Number(lines[i])
    }
}

console.log(`${largest} eh o maior`)
