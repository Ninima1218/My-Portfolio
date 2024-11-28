import React from 'react';
import './Footer.css'; 
import NavLink from '../NavLink/NavLink.tsx';
import fb from '../../images/facebook.png';
import insta from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import gmail from '../../images/gmail.png';
import github from '../../images/github.png';

const Footer = () => {
  return (
    <footer>
      <div className="citation">
      <p className="citation-text">"Success is not final; failure is not fatal: it is the courage to continue that counts"</p>
      </div>
      <p className="author">Winston Churchill</p>
      <div className="footer-content">
        <section className="footer-menu">
          <NavLink />
        </section>
        <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" className="logo" />
      </div>
      <div className='socialMedia'>
      {[
          { src: fb, alt: "Facebook Logo" },
          { src: insta, alt: "Instagram Logo" },
          { src: linkedin, alt: "LinkedIn Logo" },
          { src: gmail, alt: "Gmail Logo" },
          { src: github, alt: "GitHub Logo" }
        ].map((icon, index) => (
          <a key={index} aria-label={icon.alt} className="social-icon">
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
