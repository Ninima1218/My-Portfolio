import React from 'react';
import Header from './components/Header/Header.tsx';
import About from './components/About/About.tsx';
import Intro from './components/Intro/Intro.tsx';
import Portfolio from './components/Portfolio/Portfolio.tsx';
import Footer from './components/Footer/Footer.tsx';
import './App.css'; // Основные стили для всего приложения

const App = () => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;