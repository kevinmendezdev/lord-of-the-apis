import React from 'react';
import { css } from '@emotion/react';

import { Hero } from '../model/Hero';
import * as Const from '../constants';

type HeroImageProps = {
  hero: Hero;
  onClick: any;
};

const HeroImage = ({ hero, onClick }: HeroImageProps) => {
  return (
    <>
      <img
        onClick={onClick}
        css={css`
          max-width: 250px;
          width: 100%;
          height: auto;
          margin: 20px auto;
        `}
        src={`${Const.API_BASE_URL}/${hero.imagesrc}`}
        alt={hero.name}
      />
    </>
  );
};

export default HeroImage;
