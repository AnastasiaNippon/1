import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import WordTable from './components/WordTable';
import WordTrainer from './components/WordTrainer';

const App = () => {
  const words = [
    { id: 1, word: 'cat', transcription: 'kæt', translation: 'кошка', theme: 'Animals' },
    { id: 2, word: 'dog', transcription: 'dɒg', translation: 'собака', theme: 'Animals' }
  ];

  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<WordTable words={words} />} />
          <Route path="/game" element={<WordTrainer words={words} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
