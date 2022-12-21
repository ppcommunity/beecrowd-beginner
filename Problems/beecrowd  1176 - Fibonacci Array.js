var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tc = Number(lines.shift());

for (let i = 0; i < tc; i++) {
	let first = 0;
	let second = 1;
	let next;
	let term = Number(lines[i]);
	if (term == 0) {
		console.log(`Fib(${term}) = ${first}`);
	} else if (term == 1) {
		console.log(`Fib(${term}) = ${second}`);
	} else {
		for (let j = 0; j < term - 1; j++) {
			next = first + second;
			first = second;
			second = next;
		}
		console.log(`Fib(${term}) = ${next}`);
	}
}
