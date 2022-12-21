var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let V = parseInt(lines.shift())

for (let i = 0; i < 10; i++) {
	lines[i] = V
	console.log(`N[${i}] = ${lines[i]}`)
	V = V * 2
}
