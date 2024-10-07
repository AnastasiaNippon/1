import React, { useState } from 'react';
import './App.css';

const WordCard = ({ word, translation }) => {
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);

  const handleShowTranslation = () => {
    setIsTranslationVisible(true);
  };

  return (
    <div className="word-card">
      <h3>{word}</h3>
      {isTranslationVisible ? (
        <p>{translation}</p>
      ) : (
        <button onClick={handleShowTranslation}>Показать перевод</button>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Карточки слов</h1>
      <WordCard word="Hello" translation="Привет" />
      <WordCard word="World" translation="Мир" />
    </div>
  );
}

export default App;
