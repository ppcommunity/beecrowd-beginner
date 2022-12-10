var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift().split(' ')

let A, N;
for (let i = 0; i < line.length; i++) {
	if (parseInt(line[i]) > 0) {
		if (!A) {
			A = parseInt(line[i])
		} else if (!N) {
			N = parseInt(line[i])
		}
	}
}

let sum = 0
for (let j = 0; j < N; j++) {
	sum += (A + j)
}
console.log(sum)