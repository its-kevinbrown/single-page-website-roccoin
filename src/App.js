import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './styles/index.css';

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Projects />
      <About />
    </div>
  )
}


export default App;