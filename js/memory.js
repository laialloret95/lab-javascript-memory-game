class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    let i = this.cards.length, ranNum, temp;
    while (--i > 0) { // loops from last index to 1 index
      ranNum = Math.floor(Math.random() * (i+1)); // random num between 0 and i
      // swapping between the 2 cards
      temp = this.cards[ranNum]; // Store the card on that index
      this.cards[ranNum] = this.cards[i]; // Card in i index swaped to ranNum index position;
      this.cards[i] = temp; // place the temp card into where the card i index was
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
    return true;
  } else { 
    return false;}
  }
}