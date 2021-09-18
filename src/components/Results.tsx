import React from 'react';

import { Hero } from '../model/Hero';
import HeroeCard from './HeroCard';
import styled from '@emotion/styled';

type ResultsProps = {
  heroes: Hero[];
};

const HeroCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Results = ({ heroes }: ResultsProps) => {
  return heroes.length > 0 ? (
    <>
      <h3>Here are your heroes</h3>
      <HeroCardsContainer>
        {heroes.map((heroe) => (
          <HeroeCard hero={heroe} />
        ))}
      </HeroCardsContainer>
    </>
  ) : null;
};

export default Results;
