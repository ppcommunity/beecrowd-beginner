var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ')

let X = parseInt(firstline[0])
let Y = parseInt(firstline[1])

if (X>Y){
  [X, Y]= [Y, X]
}

if (Y%X==0){
  console.log ("Sao Multiplos")
}else{
  console.log("Nao sao Multiplos")
}

