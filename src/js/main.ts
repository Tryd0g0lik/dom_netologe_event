import { doc } from "prettier";

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
				const htmlH3Element = document.createElement('h3') as HTMLElement
				htmlH3Element.innerHTML = 'The END';

				clearInterval(liveGobline)
				document.getElementsByClassName('table')[0].remove();

				document.getElementById('game')?.insertAdjacentElement('beforeend', htmlH3Element)

				return
			}
		}
	});
}
