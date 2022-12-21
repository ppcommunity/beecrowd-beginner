var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const size = Number(lines.shift());

let arr = lines.shift().split(' ');

let min = arr[0];
let minNumPos = 0;
const length = arr.length;

for (let i = 1; i < length; i++) {
	if (min > arr[i]) {
		min = Number(arr[i]);
		minNumPos = i;
	}
}

console.log(`Menor valor: ${min}`);
console.log(`Posicao: ${minNumPos}`);
