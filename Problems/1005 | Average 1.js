/*
	Problem: 1005 | Average 1
 	Problem Link: https://www.beecrowd.com.br/judge/en/problems/view/1005
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = lines.shift()
let s = lines.shift()

let A = ((r * 3.5) + (s * 7.5)) / (3.5 + 7.5)
console.log("MEDIA = " + A.toFixed(5))
