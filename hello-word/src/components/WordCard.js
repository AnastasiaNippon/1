import { useState, useEffect, useRef } from 'react';
import './WordCard.css';

const WordCard = ({ word, onLearned }) => {
  const [flipped, setFlipped] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Устанавливаем фокус на кнопку при рендере новой карточки
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    setFlipped(false); // Переворачиваем карточку лицом вперёд при рендере новой карточки
  }, [word]); // Срабатывает при изменении слова

  const handleFlip = () => {
    setFlipped(!flipped); // Переключаем состояние flipped
    if (!flipped) {
      onLearned(); // Отмечаем как изученное только при первом перевороте
    }
  };

  return (
    <div className="word-card">
      {!flipped ? (
        <div className="card-front">
          <h3>{word.word}</h3>
          <p>Transcription: {word.transcription}</p>
          <p>Theme: {word.theme}</p>
          <button ref={buttonRef} onClick={handleFlip}>
            Посмотреть перевод
          </button>
        </div>
      ) : (
        <div className="card-back">
          <p>Translation: {word.translation}</p>
          <button onClick={handleFlip}>Назад</button> {/* Кнопка для переворота назад */}
        </div>
      )}
    </div>
  );
};

export default WordCard;
