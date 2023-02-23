import React from 'react';

interface CardProps {
  rank:string;
  suit:string;
}
const CardView:React.FC<CardProps> = props => {

  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + props.suit;


  if (props.suit === 'clubs') {
    return (
      <div>
        <div className="playingCards faceImages">
         <span className={cardClass}>
           <span className="rank">{props.rank}</span>
           <span className="suit">♣</span>
         </span>
        </div>
      </div>
    )
  } else if (props.suit === 'spades') {
    return (
      <div>
        <div className="playingCards faceImages">
         <span className={cardClass}>
           <span className="rank">{props.rank}</span>
          <span className="suit">♠</span>
         </span>
        </div>
      </div>
    )
  } else if (props.suit === 'hearts') {
    return (
      <div>
        <div className="playingCards faceImages">
         <span className={cardClass}>
           <span className="rank">{props.rank}</span>
          <span className="suit">♥</span>
         </span>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="playingCards faceImages">
         <span className={cardClass}>
           <span className="rank">{props.rank}</span>
          <span className="suit">♦</span>
         </span>
        </div>
      </div>
    )
  }

};

export default CardView;