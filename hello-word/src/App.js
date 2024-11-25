import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import WordTrainer from "./components/WordTrainer";
import "./App.css";
import "./themes.css";

const API_BASE_URL = "http://itgirlschool.justmakeit.ru/api/words";

const App = () => {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState({
    english: "",
    russian: "",
    transcription: "",
  });
  const [editingWord, setEditingWord] = useState(null);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true); // Для отображения загрузки

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
      if (!response.ok) {
        throw new Error("Ошибка загрузки данных с сервера.");
      }
      const data = await response.json();
      setWords(data);
      setIsLoading(false); // Отключаем загрузку
    } catch (error) {
      console.error("Ошибка загрузки слов:", error);
      setIsLoading(false); // Даже при ошибке загрузку нужно отключить
    }
  };

  const addWord = async () => {
    if (!newWord.english || !newWord.russian || !newWord.transcription) {
      setError("Все поля обязательны для заполнения!");
      return;
    }

    const wordData = {
      english: newWord.english,
      russian: newWord.russian,
      transcription: newWord.transcription,
      tags: "",
      tags_json: "",
    };

    try {
      const response = await fetch(`${API_BASE_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wordData),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении слова.");
      }

      const addedWord = await response.json();
      setWords((prevWords) => [...prevWords, addedWord]);
      setNewWord({ english: "", russian: "", transcription: "" });
      setError("");
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
    if (!editingWord.english || !editingWord.russian || !editingWord.transcription) {
      setError("Все три поля обязательны для редактирования!");
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
        <Routes>
          <Route
            path="/"
            element={
              <Home
                words={words}
                newWord={newWord}
                setNewWord={setNewWord}
                addWord={addWord}
                error={error}
                isLoading={isLoading} // Передаём состояние загрузки
              />
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
