import { useState } from 'react';
import './WordCard.css';

const WordCard = ({ word, onLearned }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    if (!flipped) {
      onLearned();
    }
  };

  return (
    <div className="word-card" onClick={handleFlip}>
      {!flipped ? (
        <div className="card-front">
          <h3>{word.word}</h3>
          <p>Transcription: {word.transcription}</p>
          <p>Theme: {word.theme}</p>
          <button onClick={handleFlip}>Посмотреть перевод</button>
        </div>
      ) : (
        <div className="card-back">
          <p>Translation: {word.translation}</p>
        </div>
      )}
    </div>
  );
};

export default WordCard;
