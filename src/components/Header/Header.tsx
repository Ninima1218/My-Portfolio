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
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <h1 className="header-name">Nino</h1>
      <img 
        src={menuImage} 
        alt="menu-logo" 
        className="menu-icon" 
        onClick={toggleMenu} 
      />

      {isMenuOpen && (
        <div className="burger-menu">
          <NavLink />
        </div>
      )}
    </header>
  );
};

export default Header;
