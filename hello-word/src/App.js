import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import WordTrainer from "./components/WordTrainer";
import Footer from "./components/Footer";
import TextDisplay from "./components/TextDisplay";
import "./themes.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const words = [
    { id: 1, word: "cat", transcription: "kæt", translation: "кошка", theme: "Animals" },
    { id: 2, word: "dog", transcription: "dɒg", translation: "собака", theme: "Animals" },
    { id: 3, word: "apple", transcription: "ˈæpəl", translation: "яблоко", theme: "Food" },
    { id: 4, word: "car", transcription: "kɑːr", translation: "машина", theme: "Transport" },
    { id: 5, word: "house", transcription: "haʊs", translation: "дом", theme: "Places" },
    { id: 6, word: "book", transcription: "bʊk", translation: "книга", theme: "Education" },
  ];

  return (
    <Router>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<WordTrainer words={words} />} />
      </Routes>
      <TextDisplay />
      <Footer />
    </Router>
  );
}

export default App;
