import React, { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Функция для получения слов с сервера
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        if (!response.ok) {
          throw new Error("Failed to fetch words");
        }
        const data = await response.json();
        setWords(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, []);

  // Методы для управления словами
  const addWord = async (word) => {
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(word),
      });
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
      const newWord = await response.json();
      setWords((prev) => [...prev, newWord]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateWord = async (id, updatedWord) => {
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWord),
      });
      if (!response.ok) {
        throw new Error("Failed to update word");
      }
      const data = await response.json();
      setWords((prev) => prev.map((word) => (word.id === id ? data : word)));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteWord = async (id) => {
    try {
      const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      setWords((prev) => prev.filter((word) => word.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <WordsContext.Provider value={{ words, loading, error, addWord, updateWord, deleteWord }}>
      {children}
    </WordsContext.Provider>
  );
};
