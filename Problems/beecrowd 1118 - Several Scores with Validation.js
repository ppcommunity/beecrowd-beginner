var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const range = lines.length;
let x = -1, y = -1;
let score = true;
for(let i = 0; i < range; i++) {
  if(score) {
     if(Number(lines[i]) >= 0 && Number(lines[i]) <= 10) {
      if(x == -1) {
        x = Number(lines[i]);
      } else if(y == -1) {
        y = Number(lines[i]);
      }
    } else {
      console.log("nota invalida");
    }

    if(x != -1 && y != -1) {
      console.log(`media = ${((x + y) / 2).toFixed(2)}`);
      console.log("novo calculo (1-sim 2-nao)");
      x = -1;
      y = -1;
      score = false;
    }
  } else {
    if(lines[i] == 1 || lines[i] == 2) {
      if(lines[i] == 1) {
        score = true;
      } else {
        break;
      }
    } else {
      console.log("novo calculo (1-sim 2-nao)");
    }
  }
}
