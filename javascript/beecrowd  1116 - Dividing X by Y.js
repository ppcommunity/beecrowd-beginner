var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift())


for(let i = 0; i < N; i++){
  let firstline = lines.shift().split(' ')
  let x = parseInt(firstline[0])
  let y = parseInt(firstline[1])

  if (y == 0){
    console.log('divisao impossivel')
  } else {
    console.log((x/y).toFixed(1))
  }
}
