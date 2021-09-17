import { useState } from 'react';
import { Hero } from '../model/Hero';

import * as Const from '../constants';
import HeroModal from './modal/HeroModal';
type HeroeProps = {
  hero: Hero;
};

function HeroeCard({ hero }: HeroeProps) {
  const [showModal, changeModal] = useState(false);
  function toggleModal() {
    changeModal(!showModal);
    console.log('toggle modal');
  }

  return (
    <div>
      <div
        className="hero-card-image background-image"
        onClick={toggleModal}
        style={{
          backgroundImage: `url(${Const.API_URL}${hero.imagesrc})`,
        }}
      ></div>
      {showModal ? (
        <HeroModal hero={hero} toggle={toggleModal} />
      ) : null}
    </div>
  );
}

export default HeroeCard;
