import { useState } from 'react';

import { HeroProps } from '../model/Hero';
import HeroModal from './modal/HeroModal';
import HeroImage from './HeroImage';

function HeroeCard({ hero }: HeroProps) {
  const [showModal, changeModal] = useState(false);
  function toggleModal() {
    changeModal(!showModal);
    console.log('toggle modal');
  }

  return (
    <div>
      <HeroImage
        hero={hero}
        height={330}
        width={244}
        onClick={toggleModal}
      />
      {showModal ? (
        <HeroModal hero={hero} toggle={toggleModal} />
      ) : null}
    </div>
  );
}

export default HeroeCard;
