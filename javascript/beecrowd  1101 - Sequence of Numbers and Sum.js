var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const length = lines.length
for(let i = 0; i<length; i++){
  let line = lines.shift().split(' ')
  let M = parseInt(line[0])
  let N = parseInt(line[1])
  if(N > M) {
    [M, N] = [N, M];
  }
  if(M > 0 && N > 0) {
    let total = 0;
    let s = '';
    for(let i = N; i <= M; i++) {
      total = total+i
      s += `${i} `;
    }
    console.log(`${s}Sum=${total}`)
  } else {
    break;
  }
}
