// import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Heroe} from './Heroe';
import HeroeCard from './HeroCard';

type ResultsProps = {
    heroes: Heroe[],
 
}

function Results({heroes}:ResultsProps) {
 

    async function requestDecks() {
        const res = await fetch(
          `https://ringsdb.com/api/public/decklist/22371`,
        );
        const json = await res.json();
    
        console.log(json);
      }
  return (
    heroes.length > 0 ? 
    <div className="heroes">
    <h3>Here are your heroes</h3>
    <div className="heroCards">
    {heroes.map((heroe)=> <HeroeCard hero = { heroe} /> )}
    </div>
    </div>
    : <div></div>
  );
}

export default Results;


