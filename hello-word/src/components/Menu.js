import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../assets/группа-в-составе-сыгранности-работая-вектор-логотипа-друзей-121304871.jpg'; // Импортируем логотип

const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="menu-links">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/game">Card</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
