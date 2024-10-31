import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import WordTable from './components/WordTable';
import WordTrainer from './components/WordTrainer';
import Footer from './components/Footer'; // Подключаем футер

const App = () => {
  const words = [
    { id: 1, word: 'cat', transcription: 'kæt', translation: 'кошка', theme: 'Animals' },
    { id: 2, word: 'dog', transcription: 'dɒg', translation: 'собака', theme: 'Animals' },
    { id: 3, word: 'apple', transcription: 'ˈæpəl', translation: 'яблоко', theme: 'Food' },
    { id: 4, word: 'car', transcription: 'kɑːr', translation: 'машина', theme: 'Transport' },
    { id: 5, word: 'house', transcription: 'haʊs', translation: 'дом', theme: 'Places' },
    { id: 6, word: 'book', transcription: 'bʊk', translation: 'книга', theme: 'Education' },
    { id: 7, word: 'sun', transcription: 'sʌn', translation: 'солнце', theme: 'Nature' },
    { id: 8, word: 'tree', transcription: 'triː', translation: 'дерево', theme: 'Nature' },
    { id: 9, word: 'water', transcription: 'ˈwɔːtər', translation: 'вода', theme: 'Nature' },
    { id: 10, word: 'phone', transcription: 'fəʊn', translation: 'телефон', theme: 'Technology' },
    { id: 11, word: 'computer', transcription: 'kəmˈpjuːtər', translation: 'компьютер', theme: 'Technology' },
    { id: 12, word: 'table', transcription: 'ˈteɪbəl', translation: 'стол', theme: 'Furniture' },
    { id: 13, word: 'chair', transcription: 'tʃɛər', translation: 'стул', theme: 'Furniture' },
    { id: 14, word: 'window', transcription: 'ˈwɪndoʊ', translation: 'окно', theme: 'House' },
    { id: 15, word: 'flower', transcription: 'ˈflaʊər', translation: 'цветок', theme: 'Nature' },
    { id: 16, word: 'coffee', transcription: 'ˈkɒfi', translation: 'кофе', theme: 'Food' },
    { id: 17, word: 'banana', transcription: 'bəˈnænə', translation: 'банан', theme: 'Food' },
    { id: 18, word: 'train', transcription: 'treɪn', translation: 'поезд', theme: 'Transport' },
    { id: 19, word: 'plane', transcription: 'pleɪn', translation: 'самолет', theme: 'Transport' },
    { id: 20, word: 'city', transcription: 'ˈsɪti', translation: 'город', theme: 'Places' },
    { id: 21, word: 'river', transcription: 'ˈrɪvər', translation: 'река', theme: 'Nature' },
    { id: 22, word: 'mountain', transcription: 'ˈmaʊntən', translation: 'гора', theme: 'Nature' },
    { id: 23, word: 'baby', transcription: 'ˈbeɪbi', translation: 'малыш', theme: 'People' },
    { id: 24, word: 'student', transcription: 'ˈstjuːdənt', translation: 'студент', theme: 'Education' },
    { id: 25, word: 'teacher', transcription: 'ˈtiːtʃər', translation: 'учитель', theme: 'Education' }
  ];
  

  return (
    <Router>
      <div className="app-container">
        <Menu />
        <Routes>
          <Route path="/" element={<WordTable words={words} />} />
          <Route path="/game" element={<WordTrainer words={words} />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
