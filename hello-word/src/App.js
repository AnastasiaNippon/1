import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import WordTrainer from "./components/WordTrainer";
import "./App.css";
import "./themes.css";

const API_KEY = "ВАШ_API_КЛЮЧ"; // Замените на ваш API-ключ
const API_URL = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup";

const App = () => {
  const [words, setWords] = useState([
    { word: "cat", translation: "кошка", transcription: "[kæt]" },
    { word: "dog", translation: "собака", transcription: "[dɒg]" },
  ]); // Добавлены тестовые данные
  const [newWord, setNewWord] = useState("");
  const [editingWord, setEditingWord] = useState(null);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const fetchWordData = async (word) => {
    try {
      const response = await fetch(
        `${API_URL}?key=${API_KEY}&lang=en-ru&text=${word}`
      );
      if (!response.ok) {
        throw new Error("Ошибка при обращении к API.");
      }
      const data = await response.json();
      if (data.def && data.def.length > 0) {
        const entry = data.def[0];
        const transcription = entry.ts || "Нет транскрипции";
        const translation =
          entry.tr && entry.tr.length > 0 ? entry.tr[0].text : "Нет перевода";
        return { word, transcription, translation };
      } else {
        setError("Слово не найдено в словаре.");
        return null;
      }
    } catch (error) {
      console.error("Ошибка подключения к API:", error);
      setError("Ошибка подключения к API.");
      return null;
    }
  };

  const addWord = async () => {
    if (!newWord) {
      setError("Поле для ввода слова не должно быть пустым!");
      return;
    }
    const wordData = await fetchWordData(newWord);
    if (wordData) {
      setWords((prevWords) => [...prevWords, wordData]);
      setNewWord("");
      setError("");
    }
  };

  const deleteWord = (wordToDelete) => {
    setWords((prevWords) => prevWords.filter((word) => word.word !== wordToDelete));
  };

  const saveWord = () => {
    if (editingWord) {
      setWords((prevWords) =>
        prevWords.map((word) =>
          word.word === editingWord.word ? editingWord : word
        )
      );
      setEditingWord(null);
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
                    {words.length > 0 ? (
                      words.map((word, index) =>
                        editingWord && editingWord.word === word.word ? (
                          <tr key={index}>
                            <td>
                              <input
                                value={editingWord.word}
                                onChange={(e) =>
                                  setEditingWord({
                                    ...editingWord,
                                    word: e.target.value,
                                  })
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
                          <tr key={index}>
                            <td>{word.word}</td>
                            <td>{word.translation}</td>
                            <td>{word.transcription}</td>
                            <td>
                              <button onClick={() => setEditingWord(word)}>
                                Редактировать
                              </button>
                              <button onClick={() => deleteWord(word.word)}>
                                Удалить
                              </button>
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td colSpan="4">Список слов пуст</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <h2>Добавить новое слово</h2>
                <div>
                  <input
                    type="text"
                    placeholder="Введите английское слово"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
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
