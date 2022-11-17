var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline = lines.shift().split(' ')
let secondline = lines.shift().split(' ')

let x1 = parseFloat(firstline[0])
let y1 = parseFloat(firstline[1])
let x2 = parseFloat(secondline[0])
let y2 = parseFloat(secondline[1])

let distance = ((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))
let result = Math.sqrt(distance)
console.log(`${result.toFixed(4)}`)
