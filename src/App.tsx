import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand/PokerHand";

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const hand = new PokerHand(cards);
  const handOutCome = hand.getOutCome()


  const getCards = () => {
    const cardDeck = new CardDeck()
    const card = cardDeck.getCards(5)
    setCards(card)
    return card
  }
  if (cards.length === 0) {
    return (
      <div>
        <button onClick={getCards}>Cards</button>
      </div>
    )
  }
  return (
    <div className="App">
      <div>
        {cards.map (card => (
          <CardView rank={card.rank} suit={card.suit} key={card.rank + card.suit}/>
        ))}
      </div>
      <div>
        <button onClick={getCards}>Cards</button>
        <div> Pairs : {handOutCome.pairs}</div>
        <div> Threes : {handOutCome.threes}</div>
        <div> Four : {handOutCome.four}</div>
      </div>
    </div>
  );

}

export default App;
