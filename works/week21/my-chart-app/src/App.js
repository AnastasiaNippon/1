import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './App.css';

// Регистрация компонентов Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  // Данные для графика
  const data = {
    labels: ['Красный', 'Синий', 'Желтый', 'Зеленый', 'Фиолетовый', 'Оранжевый'],
    datasets: [
      {
        label: 'Количество голосов',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="App">
      <h1>Круговая диаграмма</h1>
      <Pie data={data} />
    </div>
  );
}

export default App;
