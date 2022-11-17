/*
	Problem: 1004 | Simple Product
 	Problem Link: https://www.beecrowd.com.br/judge/en/problems/view/1004
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = lines.shift()
let s = lines.shift()

console.log("PROD = " + (r * s))