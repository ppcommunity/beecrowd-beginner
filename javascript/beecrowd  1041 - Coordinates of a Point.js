var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline =lines.shift().split(' ')
let x = parseFloat(firstline[0])
let y = parseFloat(firstline[1])

if(x==0 && y){
  console.log("Eixo Y")
}
else if (y==0 && x){
  console.log("Eixo X")
}
else if (x>0 && y>0){
  console.log("Q1")
}
else if (x>0 && y<0){
  console.log("Q4")
}
else if (x<0 && y>0){
  console.log("Q2")
}
else if (x<0 && y<0){
  console.log("Q3")
}
else if (x==0 && y==0){
  console.log("Origem")
}