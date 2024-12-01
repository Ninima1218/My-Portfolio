import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink.tsx';
import menuImage from '../../images/menu.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-name">Nino</h1>
      <div className="burger-menu">
        <img
          src={menuImage}
          alt="menu-logo"
          className="menu-icon"
        />
        <div className="burger-menu-content"> <NavLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
