import React from 'react';

const WordCard = ({ word, transcription, translation, topic }) => {
  return (
    <div className="word-card">
      <h2>{word}</h2>
      <p>Транскрипция: {transcription}</p>
      <p>Перевод: {translation}</p>
      <p>Тема: {topic}</p>
    </div>
  );
};

export default WordCard;
