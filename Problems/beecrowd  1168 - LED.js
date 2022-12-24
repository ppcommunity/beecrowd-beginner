var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tc = Number(lines.shift());

for(let i = 0; i < tc; i++) {
  let str = lines[i];
  let strLength = str.length, numOfLEDs = 0;
  for(let j = 0; j < strLength; j++) {
    if(str[j] == '1') {
      numOfLEDs += 2;
    } else if(str[j] == '2' || str[j] == '3' || str[j] == '5') {
      numOfLEDs += 5;
    } else if(str[j] == '4') {
      numOfLEDs += 4;
    } else if(str[j] == '0' || str[j] == '6' || str[j] == '9') {
      numOfLEDs += 6;
    } else if(str[j] == '7') {
      numOfLEDs += 3;
    } else if(str[j] == '8') {
      numOfLEDs += 7;
    }
  }
  console.log(numOfLEDs + ' leds');
}
