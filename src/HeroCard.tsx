import { useState } from 'react';
import { Hero } from './model/Hero';
import Modal from './Modal';
import parse from 'html-react-parser';
import * as Const from './constants';

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
      {/* <div className="heroCard" key={hero.name} onClick={toggleModal}>
        <img
          src={`https://ringsdb.com/${hero.imagesrc}`}
          alt={hero.name}
        />

      </div> */}

      <div
        className="hero-card-image background-image"
        onClick={toggleModal}
        style={{
          backgroundImage: `url(${Const.API_URL}${hero.imagesrc})`,
        }}
      ></div>

      {showModal ? (
        <Modal>
          <div className="modal-background">
            <div className="modal-container">
              <div className="close-button" onClick={toggleModal}>
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
                      <a className="button" href={hero.url}>
                        Open
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default HeroeCard;
