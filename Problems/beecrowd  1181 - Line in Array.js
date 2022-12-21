var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const L = lines.shift();
const T = lines.shift();

let arr2d = new Array(12).fill(0).map(() => new Array(12).fill(0));
let k = 0;
for(let i = 0; i < 12; i++) {
  for(let j = 0; j < 12; j++) {
    arr2d[i][j] = lines[k];
    k++;
  }
}

let sum = 0;
for(let x = 0; x < 12; x++) {
  sum += Number(arr2d[L][x]);
}

if(T == "S") {
  console.log(sum.toFixed(1));
} else {
  console.log((sum / 12).toFixed(1));
}