import React, { useState } from 'react';

import Results from './Results';
import { Hero } from '../model/Hero';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';
import useHeroList from '../useHeroList';

function SearchDeck() {
  const [deckId, setDeckId] = useState(20);
  const [heroList, isLoading, hasData, errorMessage] =
    useHeroList(deckId);

  function changeHandler(e: React.FormEvent<HTMLInputElement>) {
    setDeckId(+e.currentTarget.value);
    console.log(e.currentTarget.value);
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
