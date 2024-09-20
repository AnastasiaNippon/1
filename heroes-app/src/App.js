import React from 'react';
import HeroCard from './HeroCard';

const App = () => {
  const heroes = [
    {
      name: 'Superman',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
      characteristics: ['Strength', 'Flight', 'X-ray vision'],
      description: 'Superman is a powerful hero from Krypton.'
    },
    {
      name: 'Wonder Woman',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Wonder_Woman_%28circa_2020%29.png/220px-Wonder_Woman_%28circa_2020%29.png',
      characteristics: ['Agility', 'Lasso of Truth', 'Combat Skills'],
      description: 'Wonder Woman is a warrior princess of the Amazons.'
    }
  ];

  return (
    <div className="hero-list">
      {heroes.map((hero, index) => (
        <HeroCard
          key={index}
          name={hero.name}
          image={hero.image}
          characteristics={hero.characteristics}
          description={hero.description}
        />
      ))}
    </div>
  );
};

export default App;
