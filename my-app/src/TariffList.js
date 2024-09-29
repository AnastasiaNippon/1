import React from 'react';
import Tariff from './Tariff';

const TariffList = () => {
  const tariffs = [
    { name: 'Тариф A', price: 300 },
    { name: 'Тариф B', price: 550 },
    { name: 'Тариф C', price: 700 },
  ];

  return (
    <div>
      {tariffs.map((tariff, index) => (
        <Tariff key={index} name={tariff.name} price={tariff.price} />
      ))}
    </div>
  );
};

export default TariffList;
