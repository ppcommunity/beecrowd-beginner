var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseFloat(lines.shift());

for (let i = 0; i < 100; i++) {
	console.log(`N[${i}] = ${num.toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false })}`);
	num /= 2;
}
