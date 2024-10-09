import React, { useState } from 'react';
import './WordCarousel.css'; // Добавим стили

// Компонент карточки
const WordCard = ({ word, translation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div onClick={toggleTranslation} className="word-card">
      <h3>{word}</h3>
      {showTranslation && <p>{translation}</p>}
    </div>
  );
};

// Родительский компонент
const WordCarousel = ({ words = [], initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Обработчик перехода к следующей карточке
  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Обработчик перехода к предыдущей карточке
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  if (words.length === 0) {
    return <p>No words to display</p>;
  }

  return (
    <div className="word-carousel">
      <button onClick={prevCard} className="arrow-button">←</button>
      <div className="card-container">
        <WordCard word={words[currentIndex].word} translation={words[currentIndex].translation} />
      </div>
      <button onClick={nextCard} className="arrow-button">→</button>
    </div>
  );
};

// Default props на случай, если массив слов не передан
WordCarousel.defaultProps = {
  words: [{ word: 'Пример', translation: 'Example' }]
};

export default WordCarousel;
