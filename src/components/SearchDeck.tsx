import React, { useState, useCallback } from 'react';
import Results from './Results';
import { Hero } from '../model/Hero';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';
import debounce from 'lodash.debounce';
import useHeroList from '../useHeroList';

function SearchDeck() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [heroes, setHeroes] = useState<Hero[]>([]);
  const [deckId, setDeckId] = useState(20);
  // const [loadingStatus, setloadingStatus] = useState(true);
  // const [error, setError] = useState('');
  const [heroList, isLoading, hasData, errorMessage] =
    useHeroList(deckId);

  // useEffect(() => {
  //   requestDecks();
  // }, []);

  //debounce for avoiding multiple requests of decks
  // const debounceRequestDeck = useCallback(
  //   debounce(requestDecks, 600),
  //   [setDeckId],
  // );

  // async function requestDecks() {
  //   console.log('request sent');
  //   setIsLoading(true);
  //   const res = await fetch(
  //     `${Const.API_URL}/api/oauth2/deck/load/${deckId}`,
  //   );

  //   const json = await res.json();
  //   console.log(`json: ${loadingStatus}`);
  //   if ('success' in json) {
  //     setloadingStatus(false);
  //     setError(json.error);
  //   } else {
  //     setloadingStatus(true);
  //     if ('heroes' in json) {
  //       console.log('heroes in da house');
  //       let heroes = Object.keys(json.heroes);
  //       let heroesObjects = heroes.map((hero: string) =>
  //         fetchHeroe(hero),
  //       );
  //       Promise.all(heroesObjects).then((heroes: Hero[]) => {
  //         setHeroes(heroes);
  //       });
  //       console.log('heroes');
  //       console.log(heroes);
  //       console.log(heroesObjects);
  //     }
  //   }

  //   setTimeout(() => {
  //     console.log(json);
  //     setIsLoading(false);
  //   }, 2000);
  // }

  // async function fetchHeroe(heroe: string): Promise<Hero> {
  //   const res = await fetch(
  //     `https://ringsdb.com/api/public/card/${heroe}`,
  //   );
  //   const json = await res.json();
  //   console.log(json);
  //   return json;
  // }

  function changeHandler(e: React.FormEvent<HTMLInputElement>) {
    setDeckId(+e.currentTarget.value);
    console.log(e.currentTarget.value);
    // requestDecks();
    // debounceRequestDeck();
  }

  return (
    <>
      <SearchBar value={deckId} onChange={changeHandler} />
      <>
        {isLoading ? (
          <Loader />
        ) : hasData ? (
          <Results heroes={heroList as Hero[]} />
        ) : (
          <ErrorMessage error={errorMessage as string} />
        )}
      </>
    </>
  );
}

export default SearchDeck;
