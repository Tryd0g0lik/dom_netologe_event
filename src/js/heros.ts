export class Hero {
	tds: HTMLCollectionOf<HTMLElement>;
	constructor(tds: HTMLCollectionOf<HTMLElement>) {
		this.tds = tds;
	}

	get createRandomIntegers() {
		// делаем произвольное число - индекс для ичейки
		return Math.floor(Math.random() * this.tds.length);
	}

	set appending(ind: number) {
		this.tds[ind].classList.add('active');
	}

	removing() {
		document.querySelector('.active')?.classList.remove('active');
	}

	set counts(int: number) {
		//счетчик
		const counter = document.querySelector('.counter .count span:last-of-type') as HTMLElement;
		counter.innerHTML = String(int + 1);
	}

	get startGame() {
		const live: any = setInterval(() => {
			if (document.querySelector('.active')) this.removing();
			this.appending = this.createRandomIntegers as number;
		}, 1700);

		return live
	}

}
