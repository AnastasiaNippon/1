import React from 'react';
import WordCarousel from './WordCarousel';

function App() {
  const words = [
    { word: 'Привет', translation: 'Hello' },
    { word: 'Мир', translation: 'World' },
    { word: 'Карточка', translation: 'Card' }
  ];

  return (
    <div className="App">
      <h1>Word Carousel</h1>
      <WordCarousel words={words} />
    </div>
  );
}

export default App;
