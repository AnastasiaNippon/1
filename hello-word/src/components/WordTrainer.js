import { useState } from 'react';
import WordCard from './WordCard';
import './WordTrainer.css';

const WordTrainer = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);
  const [learnedWords, setLearnedWords] = useState([]);

  // Проверка на пустой массив `words`
  if (!words || words.length === 0) {
    return <div>Нет доступных слов для изучения</div>;
  }

  const nextWord = () => {
    setCurrentIndex((currentIndex + 1) % words.length);
  };

  const prevWord = () => {
    setCurrentIndex((currentIndex - 1 + words.length) % words.length);
  };

  const handleLearnedWord = () => {
    if (!learnedWords.includes(currentIndex)) {
      setLearnedWords([...learnedWords, currentIndex]);
      setLearnedCount(learnedCount + 1);
    }
  };

  const resetTraining = () => {
    setLearnedCount(0);
    setLearnedWords([]);
    setCurrentIndex(0);
  };

  return (
    <div className="trainer-container">
      <WordCard word={words[currentIndex]} onLearned={handleLearnedWord} />
      <div className="trainer-controls">
        <button onClick={prevWord}>Previous</button>
        <p>Изучено слов: {learnedCount}</p>
        <button onClick={nextWord}>Next</button>
        <button onClick={resetTraining}>Начать заново</button>
      </div>
    </div>
  );
};

export default WordTrainer;
