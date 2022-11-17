/*
	Problem: 1006 | Average 2
 	Problem Link: https://www.beecrowd.com.br/judge/en/problems/view/1006
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = lines.shift()
let s = lines.shift()
let t = lines.shift()

let A = ((r * 2) + (s * 3) + (t * 5)) / (2 + 3 + 5)
console.log("MEDIA = " + A.toFixed(1))