import React, { useState, useEffect, useRef } from "react";
import "./WordCard.css";

const WordCard = ({ word, onLearned }) => {
  const [flipped, setFlipped] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    setFlipped(false);
  }, [word]);

  if (!word) {
    return <p>Слово недоступно</p>;
  }

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
          <h3>{word.english || "Нет слова"}</h3>
          <p>Transcription: {word.transcription || "Нет транскрипции"}</p>
          <button ref={buttonRef} onClick={handleFlip}>
            Посмотреть перевод
          </button>
        </div>
      ) : (
        <div className="card-back">
          <p>Translation: {word.russian || "Нет перевода"}</p>
          <button onClick={handleFlip}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default WordCard;
