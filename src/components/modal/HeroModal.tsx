import Modal from '../../components/modal/Modal';
import parse from 'html-react-parser';
import { Hero, HeroProps } from '../../model/Hero';
import Button from './Button';
import { css } from '@emotion/react';

import CloseButton from './CloseButton';
import styled from '@emotion/styled';
import HeroImage from '../HeroImage';

type HeroModalProps = {
  hero: Hero;
  toggle: any;
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
`;
const HeroInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    & {
      flex-wrap: initial;
    }
  }
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
`;

const HeroContainer = styled.div`
  display: flex;
  padding: 0px 30px;
  @media (max-width: 600px) {
    & {
      flex-direction: column;
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
              <HeroImage
                hero={hero}
                height={430}
                width={324}
                onClick={null}
              />
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
