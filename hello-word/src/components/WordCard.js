import { useState, useEffect, useRef } from 'react';
import './WordCard.css';

const WordCard = ({ word, onLearned }) => {
  const [flipped, setFlipped] = useState(false);
  const translateButtonRef = useRef(null); // Создаем ссылку для кнопки

  const handleFlip = () => {
    setFlipped(true);
    onLearned(); // Увеличиваем счетчик изученных слов
  };

  useEffect(() => {
    // Фокус на кнопке «Посмотреть перевод» при рендеринге новой карточки
    setFlipped(false); // Сбрасываем состояние карточки при новом слове
    if (translateButtonRef.current) {
      translateButtonRef.current.focus();
    }
  }, [word]);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
      <div className="card-front">
        <h3>{word.word}</h3>
        <p>Transcription: {word.transcription}</p>
        <p>Theme: {word.theme}</p>
        {!flipped && (
          <button onClick={handleFlip} ref={translateButtonRef}>
            Посмотреть перевод
          </button>
        )}
      </div>
      {flipped && (
        <div className="card-back">
          <p>Translation: {word.translation}</p>
        </div>
      )}
    </div>
  );
};

export default WordCard;
