var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let length = lines.length
for(let i = 0; i < length; i++){
  if(lines[i] < 1){
    lines[i] = 1
    console.log(`X[${i}] = ${lines[i]}`)
  }
  else{
    console.log(`X[${i}] = ${parseInt(lines[i])}`)
  }
}
