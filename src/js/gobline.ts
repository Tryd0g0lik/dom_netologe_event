export class Gobline {
	tds: HTMLCollectionOf<HTMLElement>;
	constructor() {
		this.tds = document.getElementsByClassName('td') as HTMLCollectionOf<HTMLElement>;
	}

	get getRandom() {
		// делаем произвольное число - индекс для ичейки
		return Math.floor(Math.random() * this.tds.length);
	}

	set setAppendGoblin(ind: number) {

		this.tds[ind].classList.add('active');
	}

	set setRemoveGoblin(td: any) {
		if (td[0] !== undefined) td[0].classList.remove('active');
	}

	set setLiveCounter(int: number) {
		//счетчик
		const counter = document.querySelector('.counter .count span:last-of-type') as HTMLElement;
		counter.innerHTML = String(int + 1);

	}
	startGame() {

		const liveGobline: any = setInterval(() => {
			this.setAppendGoblin = this.getRandom as number;
			if (document.getElementsByClassName('active').length > 0) {
				setTimeout(() => {
					this.setRemoveGoblin = document.getElementsByClassName('active');
				}, 700);
			}
		}, 1700);
		return liveGobline
	}

}
