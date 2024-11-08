import { useState } from 'react';
import './FormattedTextInput.css';

const FormattedTextInput = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputText.toUpperCase()); // Пример: все буквы заглавные
    setInputText(''); // Очистить поле ввода после вывода текста
  };

  return (
    <div className="formatted-text-input">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={handleButtonClick}>Добавить</button>
      {displayText && <p className="formatted-text">{displayText}</p>}
    </div>
  );
};

export default FormattedTextInput;
