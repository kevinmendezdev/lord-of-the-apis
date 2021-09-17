import Modal from '../../components/modal/Modal';
import parse from 'html-react-parser';
import { Hero } from '../../model/Hero';

import * as Const from '../../constants';

type HeroModalProps = {
  hero: Hero;
  toggle: any;
};

const HeroModal = ({ hero, toggle }: HeroModalProps) => {
  return (
    <Modal>
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-button" onClick={toggle}>
            x
          </div>
          <h3 className="hero-name">{hero.name}</h3>
          <div className="hero-container">
            <div className="hero-card">
              <div
                className="hero-card-image-modal background-image"
                style={{
                  backgroundImage: `url(${Const.API_URL}${hero.imagesrc})`,
                }}
              ></div>
              <p className="ilustrator-name">{` Illustrator: ${hero.illustrator}`}</p>
              {/* <img src={`https://ringsdb.com/${hero.imagesrc}`} alt={hero.name} /> */}
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
      </div>
    </Modal>
  );
};

export default HeroModal;

type ButtonProps = {
  href: string;
  title: string;
};

const Button = ({ href, title }: ButtonProps) => {
  return (
    <a className="button" href={href}>
      Open
    </a>
  );
};
