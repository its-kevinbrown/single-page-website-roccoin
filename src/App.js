import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import './styles/index.css';

const App = () => {
  return (
    <div className="app">
      <About />
      <Projects />
    </div>
  )
}


export default App;