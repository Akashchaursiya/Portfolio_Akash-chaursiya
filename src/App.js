import React, {  } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <div className="">
        <Navbar />
        <div id="Home"><Home /></div>
        <div id="Projects"><Projects /></div>
        <div id="Skills" ><Skills /></div>
        <div id="About" ><About /></div>
        <div id="Contact" ><Contact /></div>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
