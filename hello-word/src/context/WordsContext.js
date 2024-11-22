import React, { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      setWords((prev) => [...prev, newWord]); // Добавляем новое слово в состояние
    } catch (err) {
      console.error(err.message);
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
      const updatedData = await response.json();
      setWords((prev) =>
        prev.map((word) => (word.id === id ? updatedData : word)) // Обновляем слово в списке
      );
    } catch (err) {
      console.error(err.message);
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
      setWords((prev) => prev.filter((word) => word.id !== id)); // Удаляем слово из состояния
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <WordsContext.Provider value={{ words, loading, error, addWord, updateWord, deleteWord }}>
      {children}
    </WordsContext.Provider>
  );
};
