import { useState } from 'react';
import WordCard from './WordCard';
import './WordTrainer.css';

const WordTrainer = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  const prevWord = () => {
    setCurrentIndex((currentIndex - 1 + words.length) % words.length);
  };

  return (
    <div className="trainer-container">
      <WordCard word={words[currentIndex]} />
      <div className="trainer-buttons">
        <button onClick={prevWord}>Previous</button>
        <button onClick={nextWord}>Next</button>
      </div>
    </div>
  );
};

export default WordTrainer;
