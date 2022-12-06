var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines.shift())

for(let i = 1; i <= 10; i++) {
	let result = i * num;
	console.log(`${i} x ${num} = ${result}`);
}