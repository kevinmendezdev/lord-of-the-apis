import { useState, useEffect, useCallback } from 'react';
import { Hero } from './model/Hero';

import * as Const from './constants';
import debounce from 'lodash.debounce';

export default function useHeroList(deckId = 20) {
  const [heroList, setheroList] = useState<Hero[]>([]);
  // const [deckId, setDeckId] = useState(20);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasData, setHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //debounce for avoiding multiple requests of decks
  const debounceRequestDeck = useCallback(
    debounce((deckId) => requestDecks(deckId), 600),
    [],
  );

  useEffect(() => {
    // requestDecks();
    debounceRequestDeck(deckId);
  }, [deckId]);

  async function requestDecks(deckId: number) {
    console.log('request sent');
    setIsLoading(true);
    const res = await fetch(
      `${Const.API_URL}/api/oauth2/deck/load/${deckId}`,
    );

    const json = await res.json();
    console.log(`json: ${hasData}`);
    if ('success' in json) {
      setHasData(false);
      setErrorMessage(json.error);
    } else {
      setHasData(true);
      console.log('heroes loading');
      if ('heroes' in json) {
        console.log('heroList in da house');
        let heroList = Object.keys(json.heroes);
        let heroListObjects = heroList.map((hero: string) =>
          fetchHeroe(hero),
        );
        Promise.all(heroListObjects).then((heroList: Hero[]) => {
          setheroList(heroList);
        });
        console.log('heroList');
        console.log(heroList);
        console.log(heroListObjects);
      }
    }

    setTimeout(() => {
      console.log(json);
      setIsLoading(false);
    }, 2000);
  }

  async function fetchHeroe(heroe: string): Promise<Hero> {
    const res = await fetch(
      `https://ringsdb.com/api/public/card/${heroe}`,
    );
    const json = await res.json();
    console.log(json);
    return json;
  }
  return [heroList, isLoading, hasData, errorMessage];
}
