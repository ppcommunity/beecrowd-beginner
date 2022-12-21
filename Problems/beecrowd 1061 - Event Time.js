var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const beginningDay = parseInt(lines.shift().split(' ')[1]);
const beginningTime = lines.shift().split(" : ");
const beginningHour = parseInt(beginningTime[0]);
const beginningMinute = parseInt(beginningTime[1]);
const beginningSecond = parseInt(beginningTime[2]);

const endingDay = parseInt(lines.shift().split(' ')[1]);
const endingTime = lines.shift().split(" : ");
const endingHour = parseInt(endingTime[0]);
const endingMinute = parseInt(endingTime[1]);
const endingSecond = parseInt(endingTime[2]);

const startTime = (beginningDay * 24 * 60 * 60) + (beginningHour * 60 * 60) + (beginningMinute * 60) + beginningSecond;
const endTime = (endingDay * 24 * 60 * 60) + (endingHour * 60 * 60) + (endingMinute * 60) + endingSecond;

const difference = endTime - startTime;
const days = parseInt(difference / (24 * 60 * 60));
console.log(`${days} dia(s)`);
const hours = parseInt((difference - (days * 24 * 60 * 60)) / (60 * 60))
console.log(`${hours} hora(s)`);
const minutes = parseInt((difference - ((days * 24 * 60 * 60) + (hours * 60 * 60))) / 60);
console.log(`${minutes} minuto(s)`);
const seconds = parseInt(difference - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60)));
console.log(`${seconds} segundo(s)`);
