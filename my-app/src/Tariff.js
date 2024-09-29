import React from 'react';
import './Tariff.css'; // Подключаем стили

const Tariff = ({ name, price }) => {
  return (
    <div className={`tariff ${price === 550 ? 'highlight' : ''}`}>
      <h2>{name}</h2>
      <p>Цена: {price}р</p>
    </div>
  );
};

export default Tariff;
