import {Heroe} from './Heroe';

type HeroeProps = {
    hero : Heroe
}


function HeroeCard ({hero} : HeroeProps){
    return (<div >
        <div className="heroCard" key={hero.name}>
            <img src={`https://ringsdb.com/${hero.imagesrc}`} alt={hero.name} />
            
             {hero.name}</div>
    </div>)
}

export default HeroeCard;