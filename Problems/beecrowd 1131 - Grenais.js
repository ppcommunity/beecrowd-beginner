var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const length = lines.length;
let gamesPlayed = 0, InterWon = 0, GremioWon = 0, Draw = 0;
for (let i = 0; i < length; i++) {
	let line = lines[i].split(' ');
	if (line.length > 1) {
		gamesPlayed++;
		let GoalByInter = Number(line[0]);
		let GoalByGremio = Number(line[1]);
		if (GoalByInter == GoalByGremio) {
			Draw++;
		} else {
			if (GoalByInter > GoalByGremio) {
				InterWon++;
			} else {
				GremioWon++;
			}
		}
		console.log("Novo grenal (1-sim 2-nao)");
	} else if (Number(line[0]) == 2) {
		break;
	}
}

console.log(gamesPlayed + ' grenais');
console.log('Inter:' + InterWon);
console.log('Gremio:' + GremioWon);
console.log('Empates:' + Draw);
if (InterWon == GremioWon) {
	console.log("Não houve vencedor");
} else {
	if (InterWon > GremioWon) {
		console.log("Inter venceu mais");
	} else {
		console.log("Gremio venceu mais");
	}
}
