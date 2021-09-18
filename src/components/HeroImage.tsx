import { Hero } from '../model/Hero';
import * as Const from '../constants';
import { css } from '@emotion/react';

type HeroImageProps = {
  hero: Hero;
  width: number;
  height: number;
  onClick: any;
};

const HeroImage = ({
  hero,
  width,
  height,
  onClick,
}: HeroImageProps) => {
  return (
    <div
      onClick={onClick}
      css={css`
        height: ${height}px;
        width: ${width}px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${Const.API_URL}/${hero.imagesrc});
        margin: 24px auto;
      `}
    ></div>
  );
};

export default HeroImage;
