class Die {
	static diceArray = [];
	
	constructor(val) {
		this.val = val;
		// console.log(val);
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
		// this.div.off('click');
		this.div.dblclick(() => this.div.remove());
	}
}

$('.new-die').click(() => {
	new Die();
	console.log(Die.diceArray);
});

$('.roll-die').click(() => {
	Die.diceArray.forEach(die => die.roll());
});
