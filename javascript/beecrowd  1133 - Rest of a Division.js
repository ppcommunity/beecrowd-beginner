var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift())

let Y = parseInt(lines.shift())

if (X > Y)
	[X, Y] = [Y, X]

for (let i = X + 1; i < Y; i++) {
	if (i % 5 == 2 || i % 5 == 3) {
		console.log(i)
	}
}
