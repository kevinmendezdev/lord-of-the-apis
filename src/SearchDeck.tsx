import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';
import { Hero } from './Hero';
import { clearTimeout } from 'timers';

function SearchDeck() {
  const [isLoading, setIsLoading] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [deckId, setDeckId] = useState(20);
  const [loadingStatus, setloadingStatus] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    requestDecks();
  }, []);

  async function requestDecks() {
    setIsLoading(true);
    const res = await fetch(
      `https://ringsdb.com/api/oauth2/deck/load/${deckId}`,
    );

    const json = await res.json();
    console.log(`json: ${loadingStatus}`);
    if ('success' in json) {
      setloadingStatus(false);
      setError(json.error);
    } else {
      setloadingStatus(true);
      if ('heroes' in json) {
        console.log('heroes in da house');
        let heroes = Object.keys(json.heroes);
        let heroesObjects = heroes.map((hero: string) =>
          fetchHeroe(hero),
        );
        Promise.all(heroesObjects).then((heroes: Hero[]) => {
          setHeroes(heroes);
        });
        console.log('heroes');
        console.log(heroes);
        console.log(heroesObjects);
      }
    }

    setTimeout(() => {
      console.log(json);
      setIsLoading(false);
    }, 1000);
  }
  async function fetchHeroe(heroe: string): Promise<Hero> {
    const res = await fetch(
      `https://ringsdb.com/api/public/card/${heroe}`,
    );
    const json = await res.json();
    console.log(json);
    return json;
  }
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    // setTimeout(() => {
    //   // console.log(e.currentTarget.value);
    //   requestDecks();
    // }, 3000);
    setDeckId(+e.currentTarget.value);

    console.log(e.currentTarget.value);
    requestDecks();
  }

  return (
    <div className="App">
      <form>
        <label>
          Search for a decklist here:
          <input
            type="number"
            name="name"
            onChange={onChange}
            value={deckId}
          />
        </label>
      </form>
      {isLoading ? (
        <p>loading</p>
      ) : loadingStatus ? (
        <Results heroes={heroes} />
      ) : (
        <div>
          <p>Oops!</p>
          <p>{error}</p>
          <p>Try again with other hero id!</p>
        </div>
      )}
    </div>
  );
}

export default SearchDeck;
