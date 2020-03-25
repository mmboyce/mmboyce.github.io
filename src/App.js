import React from 'react';
import About from './components/About';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import 'normalize.css';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Sidebar
          pageWrapId="page-wrap"
          outerContainerId="App"
        />

        <div id="page-wrap">
          <About />
          <div>
            <Experience />
          </div>
          <Skills />
          <Interests />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
