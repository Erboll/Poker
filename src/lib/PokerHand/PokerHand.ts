import Card from "../Card";
import card from "../Card";

interface CardTypes {
  [key:string]:number
}
class PokerHand {
  constructor(public  cards:Card[]) {}

  getOutCome () {
    const numbers = {
      pairs: 0,
      threes:0,
      four:0
    }
    const map = this.cards.reduce<CardTypes>((acc,card ) => {
      if (acc[card.rank]){
        acc[card.rank] ++
      } else {
        acc[card.rank] = 1
      }

      return acc
    }, {})
    Object.keys(map).forEach(rank => {
      const number = map[rank]
      if (number === 2) {
        numbers.pairs++
      }
      if(number === 3) {
        numbers.threes++
      }
      if (number === 4) {
        numbers.four++
      }
    })
    return numbers
  }

}

export default PokerHand;