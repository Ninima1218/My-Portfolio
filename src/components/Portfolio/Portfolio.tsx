import React from 'react';
import Justice from '../../images/justice.png';
import LanguageApp from '../../images/language-app.png';
import './Portfolio.css'; 

const projects = [
  {
    title: 'Responsive Website for a Law Firm',
    description: 'Designed and developed by a dedicated team of developers, this responsive website for a legal company showcases the firm’s services and contact information with elegance and functionality. Using HTML, CSS, and JavaScript, the site ensures seamless user experience across all devices.',
    imageUrl: Justice,
    link: 'https://project-itgirlschool.github.io/fr83_justice/#services'
  },
  {
    title: 'Speak Up: Language Learning Platform',
    description: 'Independently crafted on React and powered by MobX, "Speak Up" is a versatile template for self-directed language learning. It features a variety of lexical themes and language components, including grammar, listening exercises, and more, providing a comprehensive learning experience.',
    imageUrl: LanguageApp,
    link: 'https://github.com/Ninima1218/language-app/tree/mobx'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className='portfolio-section'>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
