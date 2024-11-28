import React from "react";
import WordTable from "./WordTable";
import "./Home.css";

const Home = ({
  words,
  newWord,
  setNewWord,
  addWord,
  error,
  isLoading,
  editingWord,
  setEditingWord,
  saveWord,
  deleteWord,
}) => {
  return (
    <main className="home-container">
      <div className="animated-title-container">
        <h1 className="animated-title">Добро пожаловать!</h1>
      </div>
      <p>Здесь вы можете изучать слова с помощью карточек.</p>
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <WordTable
            words={words}
            editingWord={editingWord}
            setEditingWord={setEditingWord}
            saveWord={saveWord}
            deleteWord={deleteWord}
          />
          <h2>Добавить новое слово</h2>
          <div>
            <input
              type="text"
              placeholder="Слово (на английском)"
              value={newWord.english}
              onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
            />
            <input
              type="text"
              placeholder="Перевод"
              value={newWord.russian}
              onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
            />
            <input
              type="text"
              placeholder="Транскрипция"
              value={newWord.transcription}
              onChange={(e) =>
                setNewWord({ ...newWord, transcription: e.target.value })
              }
            />
            <button onClick={addWord}>Добавить</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
