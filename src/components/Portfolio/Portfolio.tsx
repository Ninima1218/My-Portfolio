import React from 'react';
import Justice from '../../images/justice.png';
import LanguageApp from '../../images/language-app.png';
import './Portfolio.css'; 

const projects = [
  {
    title: 'Legal Services Firm',
    description: 'Описание проекта 1',
    imageUrl: Justice,
    link: 'https://project-itgirlschool.github.io/fr83_justice/#services'
  },
  {
    title: 'Language App',
    description: 'Описание проекта 2',
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
