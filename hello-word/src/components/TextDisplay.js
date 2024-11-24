import React, { useState } from 'react';

const TextDisplay = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(text.toUpperCase());
  };

  
};

export default TextDisplay;
