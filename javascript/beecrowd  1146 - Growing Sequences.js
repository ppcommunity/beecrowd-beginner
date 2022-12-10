var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let range = lines.length

for (let i = 0; i < range; i++) {
	if (lines[i] != 0) {
		let s = ""
		for (let j = 1; j <= lines[i]; j++) {
			if (j == lines[i]) {
				s = s + `${j}`
			} else {
				s = s + `${j} `;
			}
		}
		console.log(s)
	} else {
		break
	}
}
