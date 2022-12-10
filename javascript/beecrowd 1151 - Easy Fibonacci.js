var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());
let series = [0, 1];

for (let i = 2; i < n; i++) {
	series[i] = series[i - 1] + series[i - 2];
}

if (n == 1) {
	console.log(series[0]);
} else if (n == 2) {
	console.log(series.join(' '));
} else {
	console.log(series.join(' '));
}
