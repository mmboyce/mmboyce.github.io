import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import 'normalize.css';

function App() {
  return (
    <div id="App">

      <div id="page-wrap">
        <About />
        <div>
          <Experience />
        </div>
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
