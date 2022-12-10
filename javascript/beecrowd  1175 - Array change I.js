var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let range = lines.length

for (let i = range - 1; i >= 0; i--) {
	console.log(`N[${range - (i + 1)}] = ${parseInt(lines[i])}`)
}