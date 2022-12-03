var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let firstline =lines.shift().split(' ')
let E = parseFloat(lines.shift());

let A = parseFloat(firstline[0]);
let B = parseFloat(firstline[1]);
let C = parseFloat(firstline[2]);
let D = parseFloat(firstline[3]);

let avrg = ((A * 2) + (B * 3) + (C * 4) + (D * 1)) / (2 + 3 + 4 + 1);
let extra = (avrg+E)/2
console.log(`Media: ${avrg.toFixed(1)}`)

if (avrg>=7.0){
  console.log("Aluno aprovado.")
}else if (avrg<5.0){
    console.log("Aluno reprovado.")
}else if(avrg>=5.0 && avrg<=6.9){
  console.log("Aluno em exame.")
  console.log(`Nota do exame: ${E.toFixed(1)}`)
  if (extra>=5.0){
    console.log("Aluno aprovado.")
  }else if(extra<=4.9){
    console.log("Aluno reprovado.")
  }console.log(`Media final: ${extra.toFixed(1)}`)
}
