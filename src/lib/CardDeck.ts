import Card from "./Card";
class CardDeck {
  cards:Card[] = [];
  cardsFive:any = []
  constructor() {

    const suits = ['diams', 'hearts', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    for (let i = 0; i < suits.length; i++)  {
      const suit = suits[i];
      for(let j = 0; j < ranks.length; j++) {
        const rank = ranks[j]
        const card = new Card(rank , suit);
        this.cards.push(card)
      }

    }
  }
  getCard() {
    const randomCard = Math.floor(Math.random() * this.cards.length)
    return this.cards.splice(randomCard , 1)[0];
  }

  getCards(howMany:number){
    for (let i = 0; i < howMany; i++) {
      this.cardsFive.push(this.getCard())
    }
    return this.cardsFive
  }
}
export default CardDeck;