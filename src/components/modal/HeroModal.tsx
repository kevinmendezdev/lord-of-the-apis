import Modal from '../../components/modal/Modal';
import parse from 'html-react-parser';
import { Hero } from '../../model/Hero';
import Button from './Button';
import { css } from '@emotion/react';

import * as Const from '../../constants';
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
`;

const IllustratorName = styled.p`
  font-style: italic;
  font-size: 14px;
`;

const HeroModal = ({ hero, toggle }: HeroModalProps) => {
  return (
    <Modal>
      <ModalBackground>
        <div className="modal-container">
          <CloseButton onClick={toggle} />
          <h3 className="hero-name">{hero.name}</h3>
          <div className="hero-container">
            <div className="hero-card">
              <HeroImage
                hero={hero}
                height={430}
                width={324}
                onClick={null}
              />
              <IllustratorName>{` Illustrator: ${hero.illustrator}`}</IllustratorName>
            </div>

            <div className="hero-modal-container">
              <div>
                <h3>Hero info</h3>
              </div>
              <div className="hero-info">
                <div className="hero-stats">
                  <p>{`attack: ${hero.attack}`}</p>
                  <p>{`defense: ${hero.defense}`}</p>
                  <p>{`health: ${hero.health}`}</p>
                  <p>{`willpower: ${hero.willpower}`}</p>
                </div>
                <div className="hero-description">
                  <p>{parse(hero.text)}</p>
                  <p>{parse(hero.flavor)}</p>
                  <Button href={hero.url} title="Open" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBackground>
    </Modal>
  );
};

export default HeroModal;
