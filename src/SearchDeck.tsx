import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';
import {Heroe} from './Heroe';


function SearchDeck() {
    const [isLoading,setIsLoading] = useState(false);
    const [heroes, setHeroes] = useState<Heroe[]>([])
    const [deckId,setDeckId] = useState(20);
    useEffect(()=>{
        requestDecks();
    }, [])

    async function requestDecks() {
        setIsLoading(true);
        const res = await fetch(
          `https://ringsdb.com/api/oauth2/deck/load/${deckId}`,
        );
        
        const json = await res.json();
        console.log(`json: ${json.success}`);
        if(json["heroes"] !== undefined){
            console.log('heroes in da house');
  let heroes = Object.keys(json.heroes);
    let heroesObjects =    heroes.map((hero : string)=>fetchHeroe(hero));
    Promise.all(heroesObjects).then((heroes : Heroe []) => {
        setHeroes(heroes);
    })
        console.log('heroes');
        console.log(heroes);
        console.log(heroesObjects);
        }
      
        setTimeout(()=>{
            console.log(json);
            setIsLoading(false);
        },3000);
       
      }
      async function fetchHeroe(heroe : string) : Promise<Heroe>{
          const res = await fetch( `https://ringsdb.com/api/public/card/${heroe}`);
          const json = await res.json();
          console.log(json);
          return json;

      }
      function onChange(e : React.FormEvent<HTMLInputElement>){
        setDeckId(+e.currentTarget.value);

          console.log(e.currentTarget.value);
          requestDecks();
      }

  return (
    <div className="App">
        <form>
  <label>
    Search for a decklist here:
    <input type="number" name="name" onChange={onChange} value={deckId} />
  </label>
</form>
    {
        isLoading ? <p>loading</p> : <Results heroes= {heroes} />
    }

      
    </div>
  );
}



export default SearchDeck;
