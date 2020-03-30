/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

import 'normalize.css';
import './scss/app.scss';

function App() {
  function Header() {
    return (
      <div id="header">
        <a href="#about-target" className="header-link">About</a>
        <a href="#professional-target" className="header-link">Experience</a>
        <a href="#skills" className="header-link">Skills</a>
      </div>
    );
  }

  return (
    <div id="App">
      <Header />
      <div id="content">
        <a name="about-target" className="anchor">&nbsp;</a>
        <About />
        <a name="professional-target" className="anchor">&nbsp;</a>
        <Experience />
        <a name="skills-target" className="anchor">&nbsp;</a>
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
