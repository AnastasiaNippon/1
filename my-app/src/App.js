import React from 'react';
import TariffList from './TariffList';
import WordTable from './WordTable';

function App() {
  return (
    <div>
      <h1>Список тарифов</h1>
      <TariffList />
      <h1>Список слов</h1>
      <WordTable />
    </div>
  );
}

export default App;
