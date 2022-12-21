/*
	Problem: 1001 | Extremely Basic
 	Problem Link: https://www.beecrowd.com.br/judge/en/problems/view/1001
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())

console.log("X = " + (A + B))