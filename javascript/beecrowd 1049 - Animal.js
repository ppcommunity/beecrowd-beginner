var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line1 = lines.shift();
const line2 = lines.shift();
const line3 = lines.shift();

if(line1 === "vertebrado") {
  if(line2 === "ave") {
    if(line3 === "carnivoro") {
      console.log("aguia");
    } else if (line3 === "onivoro") {
      console.log("pomba");
    }
  } else if(line2 === "mamifero") {
    if(line3 === "herbivoro") {
      console.log("vaca");
    } else if (line3 === "onivoro") {
      console.log("homem");
    }
  }
} else if(line1 === "invertebrado") {
  if(line2 === "inseto") {
    if(line3 === "hematofago") {
      console.log("pulga");
    } else if (line3 === "herbivoro") {
      console.log("lagarta");
    }
  } else if(line2 === "anelideo") {
    if(line3 === "hematofago") {
      console.log("sanguessuga");
    } else if (line3 === "onivoro") {
      console.log("minhoca");
    }
  }
}
