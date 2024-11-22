import { Link } from 'react-router-dom';
import React from "react";
import './Menu.css';
import logo from '../assets/группа-в-составе-сыгранности-работая-вектор-логотипа-друзей-121304871.jpg'; // Корректный импорт логотипа

const Menu = ({ theme, toggleTheme }) => {
  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" /> {/* Используем корректный путь */}
      </div>
      <ul className="menu-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </button>
    </div>
  );
};

export default Menu;
