const { Gobline } = require("./gobline.ts");




const goblinClassActive = new Gobline();
let liveGobline = goblinClassActive.startGame();



let unladenClik = 0
let count = 0;
for (let i = 0; i < goblinClassActive.tds.length; i++) {
	goblinClassActive.tds[i].addEventListener('click', (e: Event) => {

		if (e.target === document.querySelector('.active')) {
			goblinClassActive.setLiveCounter = count;
			count++;
			unladenClik = 0
			clearInterval(liveGobline);
			liveGobline = goblinClassActive.startGame()
		} else {
			unladenClik++;
			if (unladenClik === 5) {
				clearInterval(liveGobline)
				return
			}
		}
	});
}
