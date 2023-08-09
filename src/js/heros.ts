export class Hero {
	tds: HTMLCollectionOf<HTMLElement>;
	constructor(tds: HTMLCollectionOf<HTMLElement>) {
		this.tds = tds;
	}

	get getRandom() {
		// делаем произвольное число - индекс для ичейки
		return Math.floor(Math.random() * this.tds.length);
	}

	set appendHero(ind: number) {
		this.tds[ind].classList.add('active');
	}

	set removeHero(td: any) {
		if (td[0] !== undefined) td[0].classList.remove('active');
	}

	set counts(int: number) {
		//счетчик
		const counter = document.querySelector('.counter .count span:last-of-type') as HTMLElement;
		counter.innerHTML = String(int + 1);

	}
	startGame() {

		const liveGoblin: any = setInterval(() => { //убрать вложение.Сделать закрытие по клиеку
			this.appendHero = this.getRandom as number;
			if (document.getElementsByClassName('active').length > 0) {
				setTimeout(() => {
					this.removeHero = document.getElementsByClassName('active');
				}, 700);
			}
		}, 1700);

		return liveGoblin
	}

}
