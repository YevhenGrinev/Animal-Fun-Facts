import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


const title = ''; 

const background = (
  <img src='/images/ocean.jpg' className="background" alt="ocean" />
);
const showBackground = true;

const images = [];

for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button' 
      onClick={displayFact} 
    />
  )
}
const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>

    {showBackground && background}
    <p id='fact'></p>
    <div className="animals">{images}</div> 
  </div>
);

function displayFact(e) {
  const selectedAnimal = e.target.alt; 
  const animalInfo = animals[selectedAnimal];
  const randomIndex = Math.floor(Math.random() * animalInfo.facts.length); 
  const funFact = animalInfo.facts[randomIndex];
  document.getElementById('fact').innerHTML = funFact;
}




ReactDOM.render(animalFacts, document.getElementById('root')); 

