import { useState } from 'react';
import { Hero } from '../model/Hero';

import * as Const from '../constants';
import HeroModal from './modal/HeroModal';
import styled from '@emotion/styled';
import HeroImage from './HeroImage';

// const HeroImage = styled.div`
//   height: 430px;
//   width: 324px;
// `;

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
