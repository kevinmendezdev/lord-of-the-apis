import { useState } from 'react';

import { Hero } from '../model/Hero';
import HeroModal from './modal/HeroModal';
import HeroImage from './HeroImage';

export type HeroProps = {
  hero: Hero;
};

function HeroeCard({ hero }: HeroProps) {
  const [showModal, changeModal] = useState(false);
  function toggleModal(): void {
    changeModal(!showModal);
  }

  return (
    <div>
      <HeroImage hero={hero} onClick={toggleModal} />
      {showModal ? (
        <HeroModal hero={hero} toggle={toggleModal} />
      ) : null}
    </div>
  );
}

export default HeroeCard;
