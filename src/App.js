import React from 'react';
import Header from './components/Header/Header.tsx';
import Skills from './components/Skills/Skills.tsx';
import Intro from './components/Intro/Intro.tsx';
import Portfolio from './components/Portfolio/Portfolio.tsx';
import Vision from './components/Vision/Vision.tsx';
import Footer from './components/Footer/Footer.tsx';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <div className='intro-container'>
      <Header />
      <Intro />
      </div>
      <Skills />
      <Portfolio />
      <Vision />
      <Footer />
    </div>
  )
};

export default App;