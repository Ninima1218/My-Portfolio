import React from 'react';
import './Portfolio.css'; // Подключи файл стилей для секции портфолио

const projects = [
  {
    title: 'Project 1',
    description: 'Описание проекта 1',
    imageUrl: '/images/project1.png', // Заменить на свои изображения
    link: 'https://ссылка-на-проект1.com'
  },
  {
    title: 'Project 2',
    description: 'Описание проекта 2',
    imageUrl: '/images/project2.png',
    link: 'https://ссылка-на-проект2.com'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
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
