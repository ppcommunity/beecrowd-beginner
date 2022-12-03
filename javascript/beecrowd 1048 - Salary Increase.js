var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = parseFloat(lines.shift());

if(salary <= 400) {
  let increased = salary * 15 / 100;
  let newSalary = salary + increased;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${increased.toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
} else if(salary > 400 && salary <= 800) {
  let increased = salary * 12 / 100;
  let newSalary = salary + increased;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${increased.toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
} else if(salary > 800 && salary <= 1200) {
  let increased = salary * 10 / 100;
  let newSalary = salary + increased;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${increased.toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
} else if(salary > 1200 && salary <= 2000) {
  let increased = salary * 7 / 100;
  let newSalary = salary + increased;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${increased.toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
} else if(salary > 2000) {
  let increased = salary * 4 / 100;
  let newSalary = salary + increased;
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${increased.toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}