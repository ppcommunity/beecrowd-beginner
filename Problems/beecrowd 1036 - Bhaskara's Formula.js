var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ')

let a = parseFloat(firstline[0])
let b = parseFloat(firstline[1])
let c = parseFloat(firstline[2])

let sqrt = Math.sqrt(b * b - 4 * a * c) 
let lobster = b * b - 4 * a * c;

let R1 = (-b + sqrt) / (2 * a)
let R2 = (-b - sqrt) / (2 * a)

if(a == 0 || lobster < 0){
  console.log("Impossivel calcular")
} else {
  console.log(`R1 = ${R1.toFixed(5)}`)
  console.log(`R2 = ${R2.toFixed(5)}`)
}
