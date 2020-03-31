/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Scrollspy from 'react-scrollspy';
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
        <Scrollspy items={['about-section', 'professional-section', 'skills-section']} currentClassName="header-link-current">
          <li><a href="#about-target" className="header-link">About</a></li>
          <li><a href="#professional-target" className="header-link">Experience</a></li>
          <li><a href="#skills-target" className="header-link">Skills</a></li>
        </Scrollspy>
      </div>
    );
  }

  return (
    <div id="App">
      <Header />
      <div id="content">
        <a name="about-target" className="anchor">&nbsp;</a>
        <section id="about-section">
          <About />
        </section>
        <a name="professional-target" className="anchor">&nbsp;</a>
        <section id="professional-section">
          <Experience />
        </section>
        <a name="skills-target" className="anchor">&nbsp;</a>
        <section id="skills-section">
          <Skills />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
