import { useState, useEffect, useRef } from 'react';
import './WordCard.css';

const WordCard = ({ word, onLearned }) => {
  const [flipped, setFlipped] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    setFlipped(false); 
  }, [word]); 

  const handleFlip = () => {
    setFlipped(!flipped); 
    if (!flipped) {
      onLearned(); 
    }
  };

  return (
    <div className="word-card">
      {!flipped ? (
        <div className="card-front">
          <h3>{word.word}</h3>
          <p>Transcription: {word.transcription}</p>
          <button ref={buttonRef} onClick={handleFlip}>
            Посмотреть перевод
          </button>
        </div>
      ) : (
        <div className="card-back">
          <p>Translation: {word.translation}</p>
          <button onClick={handleFlip}>Назад</button> 
        </div>
      )}
    </div>
  );
};

export default WordCard;
