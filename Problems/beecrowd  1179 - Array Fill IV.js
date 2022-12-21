var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let evenNums = [];
let oddNums = [];
for (let i = 0; i < lines.length; i++) {
	let num = Number(lines[i]);
	if (num != 0) {
		if (num % 2 == 0) {
			evenNums.push(num);
			if (evenNums.length == 5) {
				for (let k = 0; k < 5; k++) {
					console.log(`par[${k}] = ${evenNums.shift()}`)
				}
			}
		} else {
			oddNums.push(num);
			if (oddNums.length == 5) {
				for (let k = 0; k < 5; k++) {
					console.log(`impar[${k}] = ${oddNums.shift()}`)
				}
			}
		}
	}
}

for (let k = 0; k < oddNums.length; k++) {
	console.log(`impar[${k}] = ${oddNums[k]}`)
}
for (let k = 0; k < evenNums.length; k++) {
	console.log(`par[${k}] = ${evenNums[k]}`)
}