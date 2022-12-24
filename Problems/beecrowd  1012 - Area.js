var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

const PI = 3.14159;
const A = Number(lines[0])
const B = Number(lines[1])
const C = Number(lines[2])

const AreaOfTriangle = 0.5 * A * C;
const AreaOfCircle = PI * C * C;
const AreaOfTrapizium = ((A + B) / 2) * C;
const AreaOfSquare = B * B;
const AreaOfRectangle = A * B;

console.log("TRIANGULO: " + AreaOfTriangle.toFixed(3));
console.log("CIRCULO: " + AreaOfCircle.toFixed(3));
console.log("TRAPEZIO: " + AreaOfTrapizium.toFixed(3));
console.log("QUADRADO: " + AreaOfSquare.toFixed(3));
console.log("RETANGULO: " + AreaOfRectangle.toFixed(3));
