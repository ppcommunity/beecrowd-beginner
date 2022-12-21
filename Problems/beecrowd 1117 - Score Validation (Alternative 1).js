var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let range = lines.length

let x = -1;
let y = -1;

for (let i = 0; i < range; i++) {
	if (lines[i] < 0 || lines[i] > 10) {
		console.log('nota invalida')
	} else {
		if (x == -1) {
			x = Number(lines[i]);
		} else if (y == -1) {
			y = Number(lines[i]);
			break;
		}
	}
}

const result = (x + y) / 2;
console.log(`media = ${result.toFixed(2)}`);
