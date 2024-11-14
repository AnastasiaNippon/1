import React, { useState } from 'react';

const TextDisplay = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(text.toUpperCase()); // Пример форматирования: преобразование текста в заглавные буквы
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Введите текст"
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Отобразить текст
      </button>
      <p style={{ color: 'blue', fontWeight: 'bold', marginTop: '20px' }}>{displayText}</p>
    </div>
  );
};

export default TextDisplay;
