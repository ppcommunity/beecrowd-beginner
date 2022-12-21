var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift())

for (let i = 1; i <= N; i++) {
	let j = i * i
	let k = i * j
	console.log(`${i} ${j} ${k}`)
	console.log(`${i} ${j + 1} ${k + 1}`)
}
