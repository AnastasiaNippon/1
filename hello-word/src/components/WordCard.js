import { useState } from 'react';
import './WordCard.css'; // Подключаем стили

const WordCard = ({ word }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <h3>{word.word}</h3>
        <p>Transcription: {word.transcription}</p>
        <p>Theme: {word.theme}</p>
      </div>
      <div className="card-back">
        <p>Translation: {word.translation}</p>
      </div>
    </div>
  );
};

export default WordCard;
