import React from 'react';
import './NavLink.css';

const NavLink = () => {
    return (
            <nav>
                <ul className="nav-list">
                    <li><a href="#intro" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                   <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                   <li><a href="#footer" className="nav-link">Contacts</a></li>
                </ul>
            </nav>
    );
  };
  
  export default NavLink;