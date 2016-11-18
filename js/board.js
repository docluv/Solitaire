function Board(deck) {

	this.stack = new Stack($('#js-stack'));
	this.waste = new Stack($('#js-waste'));

	this.fundation = {
		spades: new Stack($('#js-foundation-spades')),
		clubs: new Stack($('#js-foundation-clubs')),
		tiles: new Stack($('#js-foundation-tiles')),
		hearts: new Stack($('#js-foundation-hearts'))
	};

	this.tableau = {
		1: new Stack($('#js-tableau-0')),
		2: new Stack($('#js-tableau-1')),
		3: new Stack($('#js-tableau-2')),
		4: new Stack($('#js-tableau-3')),
		5: new Stack($('#js-tableau-4')),
		6: new Stack($('#js-tableau-5')),
		7: new Stack($('#js-tableau-6'))
	};

	for (var pile in this.tableau) {
		if(this.tableau.hasOwnProperty(pile)) {
			for (var n = pile; n > 0; n--) {
				this.tableau[pile].addCard(deck.getRandomCard());
			}
			this.tableau[pile].cards[pile-1].$element.addClass('uncovered');
		}
	}

	for (var c = deck.cards.length; c > 0; c--) {
		this.stack.addCard(deck.getRandomCard());
	}

}
