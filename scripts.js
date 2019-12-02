class Die {
	static diceArray = [];
	
	constructor() {
		Die.diceArray.push(this);
		this.render();
		this.roll();
		this.reroll();
		this.remove();
	}
	render() {
		this.div = $('<div class="die shadow"></div>');
		$('.die-container').append(this.div);
	}
	roll() {
		this.val = Math.floor((Math.random() * 6) + 1);
		this.div.text(this.val);
	}
	reroll() {
		this.div.click(() => this.roll());
	}
	remove() {
		this.div.dblclick(() => {
			this.div.remove()
			let index = Die.diceArray.indexOf(this);
			Die.diceArray.splice(index, 1);
		});
	}
}

$('.new-die').click(() => {
	new Die();
});

$('.roll-die').click(() => {
	Die.diceArray.forEach(die => die.roll());
});

$('.sum-die').click(() => {
	let sum = Die.diceArray.reduce((total, num) => {
		return total += num.val;
	}, 0);
	Swal.fire(`The sum is: ${sum}`);
});
