var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = parseFloat(lines.shift());

function output(salary, percentage) {
  let increased = salary * percentage / 100;
  let newSalary = salary + increased;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${increased.toFixed(2)}`);
  console.log(`Em percentual: ${percentage} %`);
}

if(salary <= 400) {
  output(salary, 15);
} else if(salary > 400 && salary <= 800) {
  output(salary, 12);
} else if(salary > 800 && salary <= 1200) {
  output(salary, 10);
} else if(salary > 1200 && salary <= 2000) {
  output(salary, 7);
} else if(salary > 2000) {
  output(salary, 4);
}
