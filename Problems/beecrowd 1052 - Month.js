var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift())

if (X == 1) {
  console.log("January")
} else if (X == 2) {
  console.log("February")
} else if (X == 3) {
  console.log("March")
} else if (X == 4) {
  console.log("April")
} else if (X == 5) {
  console.log("May")
} else if (X == 6) {
  console.log("June")
} else if (X == 7) {
  console.log("July")
} else if (X == 8) {
  console.log("August")
} else if (X == 9) {
  console.log("September")
} else if (X == 10) {
  console.log("October")
} else if (X == 11) {
  console.log("November")
} else if (X == 12) {
  console.log("December")
}
