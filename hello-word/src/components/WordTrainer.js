import { useState } from 'react';
import WordCard from './WordCard';
import './WordTrainer.css'; // Подключаем CSS для стилизации

const WordTrainer = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);

  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  const prevWord = () => {
    setCurrentIndex((currentIndex - 1 + words.length) % words.length);
  };

  const handleLearnedWord = () => {
    setLearnedCount(learnedCount + 1);
  };

  return (
    <div className="trainer-container">
      <WordCard word={words[currentIndex]} onLearned={handleLearnedWord} />
      <div className="trainer-controls">
        <button onClick={prevWord}>Previous</button>
        <p>Изучено слов: {learnedCount}</p>
        <button onClick={nextWord}>Next</button>
      </div>
    </div>
  );
};

export default WordTrainer;
