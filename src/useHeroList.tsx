import { useState, useEffect, useCallback } from 'react';
import { Hero } from './model/Hero';

import * as Const from './constants';
import debounce from 'lodash.debounce';

//custom hook for requesting herodeck from API
export default function useHeroList(deckId = 20) {
  const [heroList, setheroList] = useState<Hero[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasData, setHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //debounce for avoiding multiple requests of decks
  const debounceRequestDeck = useCallback(
    debounce(requestDeck, 600),
    [],
  );

  useEffect(() => {
    debounceRequestDeck(deckId);
  }, [deckId, debounceRequestDeck]);

  async function requestDeck(deckId: number) {
    console.log('request sent');
    setIsLoading(true);
    const res = await fetch(`${Const.API_GET_DECK}${deckId}`);

    const json = await res.json();
    if ('error' in json) {
      setHasData(false);
      setErrorMessage(json.error);
      console.log(`ERROR: ${json.error}`);
    } else {
      setHasData(true);
      console.log('heroes loading');
      if ('heroes' in json) {
        console.log('json contains hero');
        let heroList = Object.keys(json.heroes);
        let heroListObjects = heroList.map((hero: string) =>
          fetchHeroe(hero),
        );
        Promise.all(heroListObjects).then((heroList: Hero[]) => {
          setheroList(heroList);
        });

        console.log(`json has data: ${hasData}`);
        console.log('heroList');
        console.log(heroList);
        console.log(heroListObjects);
      }
    }
    //some delay to show the user deck is loading
    setTimeout(() => {
      console.log(json);
      setIsLoading(false);
    }, 1200);
  }

  async function fetchHeroe(heroe: string): Promise<Hero> {
    const res = await fetch(`${Const.API_GET_CARD}${heroe}`);
    const json = await res.json();
    return json;
  }

  return [heroList, isLoading, hasData, errorMessage];
}
