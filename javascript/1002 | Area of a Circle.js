/*
	Problem: 1002 | Area of a Circle
 	Problem Link: https://www.beecrowd.com.br/judge/en/problems/view/1002
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = lines.shift()
const pi = 3.14159
const A = pi*r*r
console.log("A=" + A.toFixed(4))