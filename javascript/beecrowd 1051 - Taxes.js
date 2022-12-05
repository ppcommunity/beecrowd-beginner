var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = Number(lines[0]);

if (salary <= 2000) {
  console.log("Isento");
} else if (salary > 2000 && salary <= 3000) {
  console.log (`R$ ${((salary - 2000) * 0.08).toFixed(2)}`);
} else if (salary > 3000 && salary <= 4500) {
  let tax1 = 2000 * 0.00;
  let tax2 = 1000 * 0.08;
  let tax3 = (salary - 2000 - 1000) * 0.18;
  console.log(`R$ ${(tax2 + tax3).toFixed(2)}`);
} else if (salary > 4500) {
  let tax1 = 2000 * 0.00;
  let tax2 = 1000 * 0.08;
  let tax3 = 1500 * 0.18;
  let tax4 = (salary - 2000 - 1000 - 1500) * 0.28;
  console.log(`R$ ${(tax2 + tax3 + tax4).toFixed(2)}`);
}
