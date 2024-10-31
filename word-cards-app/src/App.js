import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import WordTable from './components/WordTable';
import WordTrainer from './components/WordTrainer';
import Footer from './components/Footer'; 

const App = () => {
  const words = [
    {
      word: 'apple',
      transcription: '[ˈæpl]',
      translation: 'яблоко',
      topic: 'Еда'
    },
    {
      word: 'dog',
      transcription: '[dɔːg]',
      translation: 'собака',
      topic: 'Животные'
    }
  ];

  return (
    <Router>
      <div className="app-container">
        <Menu />
        <Routes>
          <Route path="/" element={<WordTable words={words} />} />
          <Route path="/game" element={<WordTrainer words={words} />} />
        </Routes>
        <Footer /> {/* Добавляем футер */}
      </div>
    </Router>
  );
};

export default App;

