import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faTerminal);

function Skills() {
  return (
    <div id="skills" className="section">
      <h1>Skills</h1>
      <div id="skills-box">
        <h2>Programming Languages &amp; Utilities</h2>
        <h3>Fluent</h3>
        <div className="languages">
          <FontAwesomeIcon id="language-child" icon={['fab', 'java']} />
          <FontAwesomeIcon id="language-child" icon={['fab', 'python']} />
          <FontAwesomeIcon id="language-child" icon={['fab', 'git']} />
          <FontAwesomeIcon id="language-child" icon={['fab', 'html5']} />
          <FontAwesomeIcon id="language-child" icon={['fab', 'css3']} />
        </div>
        <h3>Experience With</h3>
        <div className="languages">
          <FontAwesomeIcon id="language-child" icon={['fab', 'js-square']} />
          <FontAwesomeIcon id="language-child" icon={['fab', 'react']} />
          <FontAwesomeIcon icon="terminal" id="terminal" />
          <FontAwesomeIcon id="language-child" icon={['fab', 'android']} />
          <FontAwesomeIcon id="language-child" icon={['fab', 'php']} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
