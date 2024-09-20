import React from 'react';

const HeroCard = ({ name, image, characteristics, description }) => {
  return (
    <div className="hero-card">
      <img src={image} alt={name} className="hero-image" />
      <h2>{name}</h2>
      <ul>
        {characteristics.map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default HeroCard;
