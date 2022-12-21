var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const range = lines.length;
for(let idx = 0; idx < range; idx++) {
  if(lines[idx] == '0') {
    break;
  }
  
  let num = Number(lines[idx]);
  for(let j = 1; j <= num; j++) {
    let s = '';
    for(let k = 1; k <= num; k++) {
      if(j <= num / 2) {
        if(k < j || ((k > (num / 2)) && (num % k + 1 < j))) {
          k < j ? (s += String(k).padStart(3) + ' ') : k == num ? (s += String(num % k + 1).padStart(3)) : (s += String(num % k + 1).padStart(3) + ' ');
        } else {
          k == num ? (s += String(j).padStart(3)) : (s += String(j).padStart(3) + ' ');
        }
      }
      
      if(j > num / 2) {
        let m = num % j + 1;
        if(k < m || ((k > (num / 2)) && (num % k + 1 < m))) {
          k < m ? (s += String(k).padStart(3) + ' ') : k == num ? (s += String(num % k + 1).padStart(3)) : (s += String(num % k + 1).padStart(3) + ' ');
        } else {
          k == num ? (s += String(m).padStart(3)) : (s += String(m).padStart(3) + ' ');
        }
      }
    }
    console.log(s);
  }
  console.log(``);
}
