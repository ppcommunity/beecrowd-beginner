var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift())
let j = 0

for (let i = 0; i < 1000; i++) {
	if (j < T) {
		console.log(`N[${i}] = ${j}`)
		j++
	} else {
		j = 0
		console.log(`N[${i}] = ${j}`)
		j++
	}
}