import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import './styles/index.css';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Social />
      <Footer />
    </>
  )
}


export default App;