var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let int = parseInt(lines.shift());
const hour = parseInt(int/(60*60));

int = int - (hour*60*60)
const min = parseInt(int/60);

int = int - (min * 60);
const second = parseInt(int);

console.log(`${hour}:${min}:${second}`)