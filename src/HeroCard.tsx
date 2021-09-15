import { useState } from 'react';
import {Hero} from './Hero';
import Modal from './Modal';

type HeroeProps = {
    hero : Hero
}


function HeroeCard ({hero} : HeroeProps){
    const [showModal,changeModal] = useState(false);
    function toggleModal(){
        changeModal(!showModal);
        console.log('toggle modal');
    }

    return (<div >
        <div className="heroCard" key={hero.name} onClick={toggleModal}>
            <img src={`https://ringsdb.com/${hero.imagesrc}`} alt={hero.name} />
            
         
             </div>

             {
                 showModal ? (<Modal>
                     <div className="modal-background">
                         <div className="modal-container">
                         <div className="close-button" onClick={toggleModal}>x</div>
                     <h3>{hero.name}</h3>
                     <div className="hero-container">
                         <div className="hero-card">
                             <div className="hero-card-image" style={{backgroundImage: `url(https://ringsdb.com/${hero.imagesrc})`}}></div>
                             {/* <img src={`https://ringsdb.com/${hero.imagesrc}`} alt={hero.name} /> */}
                         </div>
                         <div className="hero-info">
                             <h5>Hero info</h5>
                             <div className="hero-stats">
                                 <p>{hero.attack}</p>
                                 <p>{hero.defense}</p>
                                 <p>{hero.health}</p>
                                 <p>{hero.willpower}</p>
                             </div>
                             <div className="hero-description">{hero.text}</div>

                         </div>

                     </div>
                         </div>
                       

                     </div>
                       
                 </Modal>) : null
             }
    </div>)
}

export default HeroeCard;