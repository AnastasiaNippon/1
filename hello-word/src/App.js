import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu"; 
import Footer from "./components/Footer"; 
import WordTrainer from "./components/WordTrainer"; 
import "./App.css"; 
import "./themes.css";

const API_BASE_URL = "http://itgirlschool.justmakeit.ru/api/words";

const App = () => {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState({ word: "", translation: "", transcription: "" });
  const [editingWord, setEditingWord] = useState(null);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    fetchWords();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const fetchWords = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}`);
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error("Ошибка загрузки слов:", error);
    }
  };

  const addWord = async () => {
    if (!newWord.word || !newWord.translation || !newWord.transcription) {
      setError("Все поля обязательны для заполнения!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWord),
      });

      if (response.ok) {
        const addedWord = await response.json();
        setWords((prevWords) => [...prevWords, addedWord]);
        setNewWord({ word: "", translation: "", transcription: "" });
        setError("");
      } else {
        setError("Ошибка добавления слова на сервер.");
      }
    } catch (error) {
      console.error("Ошибка добавления слова:", error);
      setError("Ошибка подключения к серверу.");
    }
  };

  const deleteWord = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}/delete`, {
        method: "POST",
      });

      if (response.ok) {
        setWords((prevWords) => prevWords.filter((word) => word.id !== id));
      } else {
        console.error("Ошибка удаления слова.");
      }
    } catch (error) {
      console.error("Ошибка удаления слова:", error);
    }
  };

  const saveWord = async () => {
    if (!editingWord.word || !editingWord.translation || !editingWord.transcription) {
      setError("Все поля обязательны для редактирования!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/${editingWord.id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingWord),
      });

      if (response.ok) {
        setWords((prevWords) =>
          prevWords.map((word) =>
            word.id === editingWord.id ? { ...word, ...editingWord } : word
          )
        );
        setEditingWord(null);
        setError("");
      } else {
        console.error("Ошибка сохранения изменений.");
      }
    } catch (error) {
      console.error("Ошибка сохранения изменений:", error);
    }
  };

  return (
    <Router>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Темная Тема" : "Светлая Тема"}
        </button>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Список слов</h1>
                <table className="word-table">
                  <thead>
                    <tr>
                      <th>Слово</th>
                      <th>Перевод</th>
                      <th>Транскрипция</th>
                      <th>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {words.map((word) =>
                      editingWord && editingWord.id === word.id ? (
                        <tr key={word.id}>
                          <td>
                            <input
                              value={editingWord.word}
                              onChange={(e) =>
                                setEditingWord({ ...editingWord, word: e.target.value })
                              }
                            />
                          </td>
                          <td>
                            <input
                              value={editingWord.translation}
                              onChange={(e) =>
                                setEditingWord({
                                  ...editingWord,
                                  translation: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              value={editingWord.transcription}
                              onChange={(e) =>
                                setEditingWord({
                                  ...editingWord,
                                  transcription: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <button onClick={saveWord}>Сохранить</button>
                            <button onClick={() => setEditingWord(null)}>Отмена</button>
                          </td>
                        </tr>
                      ) : (
                        <tr key={word.id}>
                          <td>{word.word}</td>
                          <td>{word.translation}</td>
                          <td>{word.transcription}</td>
                          <td>
                            <button onClick={() => setEditingWord(word)}>Редактировать</button>
                            <button onClick={() => deleteWord(word.id)}>Удалить</button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>

                <h2>Добавить новое слово</h2>
                <div>
                  <input
                    type="text"
                    placeholder="Слово"
                    value={newWord.word}
                    onChange={(e) =>
                      setNewWord({ ...newWord, word: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Перевод"
                    value={newWord.translation}
                    onChange={(e) =>
                      setNewWord({ ...newWord, translation: e.target.value })
                    }
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
              </div>
            }
          />
          <Route path="/game" element={<WordTrainer words={words} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
