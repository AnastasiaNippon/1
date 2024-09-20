import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WordCard from './WordCard';

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
    <div className="app">
      <Header />
      <div className="word-list">
        {words.map((wordData, index) => (
          <WordCard 
            key={index}
            word={wordData.word}
            transcription={wordData.transcription}
            translation={wordData.translation}
            topic={wordData.topic}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

