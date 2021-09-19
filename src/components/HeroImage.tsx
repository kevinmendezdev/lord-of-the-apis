import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';

import { Hero } from '../model/Hero';
import * as Const from '../constants';

type HeroImageProps = {
  hero: Hero;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};

const HeroImage = ({ hero, onClick }: HeroImageProps) => {
  return (
    <>
      <img
        onClick={onClick}
        css={css`
          max-width: 280px;
          min-width: 200px;
          width: 100%;
          height: auto;
          margin: 20px auto;
          display: block;
        `}
        src={`${Const.API_BASE_URL}/${hero.imagesrc}`}
        alt={`hero:${hero.name}`}
      />
    </>
  );
};

export default HeroImage;
