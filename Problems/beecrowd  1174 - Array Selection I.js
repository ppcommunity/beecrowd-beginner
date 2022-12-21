var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const range = lines.length - 1;
for (let i = 0; i < range; i++) {
	let num = Number(lines.shift());
	if (num <= 10) {
		console.log(`A[${i}] = ${num.toFixed(1)}`);
	}
}