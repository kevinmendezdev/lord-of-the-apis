import Modal from '../../components/modal/Modal';
import parse from 'html-react-parser';
import { Hero } from '../../model/Hero';
import Button from './Button';
import { css } from '@emotion/react';

import CloseButton from './CloseButton';
import styled from '@emotion/styled';
import HeroImage from '../HeroImage';

type HeroModalProps = {
  hero: Hero;
  toggle: any;
};

export type HeroProps = {
  hero: Hero;
};

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
  position: absolute;
  top: 0;
`;

const IllustratorName = styled.p`
  font-style: italic;
  font-size: 14px;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 85%;
  background: white;
  margin: 0 auto;
  top: 5%;
`;

const HeroInfoContainer = styled.div`
  margin: -2px 52px;
  @media (max-width: 600px) {
    & {
      margin: 0;
    }
`;
const HeroInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

const HeroStats = ({ hero }: HeroProps) => {
  return (
    <div
      css={css`
        flex: 0 0 30%;
        & p {
          font-weight: bold;
          font-size: 1.3em;
        }
        @media (max-width: 600px) {
          & p {
            font-size: 1em;
          }
      `}
    >
      <p>{`attack: ${hero.attack}`}</p>
      <p>{`defense: ${hero.defense}`}</p>
      <p>{`health: ${hero.health}`}</p>
      <p>{`willpower: ${hero.willpower}`}</p>
      <p>{`threat: ${hero.threat}`}</p>
    </div>
  );
};

const HeroDescription = ({ hero }: HeroProps) => {
  return (
    <div
      css={css`
        flex: 0 0 70%;
        @media (max-width: 500px) {
          & p {
            font-size:0.7em;
          }
      `}
    >
      <p>{parse(hero.text)}</p>
      <p>{parse(hero.flavor)}</p>
      <p>{hero.typeName}</p>
      <Button href={hero.url} title="Open" />
    </div>
  );
};

const HeroName = styled.h3`
  padding: 34px 0px 0px 28px;
  font-size: 2em;
  @media (max-width: 600px) {
    &  {
      font-size:1.4em;
    }
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0px 20px;
  @media (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
const HeroCard = styled.div``;
const HeroModal = ({ hero, toggle }: HeroModalProps) => {
  return (
    <Modal>
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={toggle} />
          <HeroName>{hero.name}</HeroName>
          <HeroContainer>
            <HeroCard>
              <HeroImage hero={hero} onClick={null} />
              <IllustratorName>{` Illustrator: ${hero.illustrator}`}</IllustratorName>
            </HeroCard>
            <HeroInfoContainer>
              <HeroInfo>
                <HeroStats hero={hero} />
                <HeroDescription hero={hero} />
              </HeroInfo>
            </HeroInfoContainer>
          </HeroContainer>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default HeroModal;
