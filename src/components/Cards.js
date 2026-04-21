import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/valorant_logo.jpg'
              text='VALORANT'
              path='https://tracker.gg/valorant/profile/riot/onion%23mango/overview?platform=pc&playlist=competitive'
            />
            <CardItem
              src='images/tft_logo.jpg'
              text='TFT'
              path='https://lolchess.gg/profile/na/onion-mango/set9.5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
