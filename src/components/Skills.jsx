import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import '../scss/skills.scss';

library.add(fab, faTerminal);

function Skills() {
  return (
    <div id="skills" className="section">
      <h1>Toolkit</h1>
      <div id="skills-box">
        <div className="languages">
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'java']} />
            <p>Java</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'python']} />
            <p>Python</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'git']} />
            <p>Git</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'html5']} />
            <p>HTML5</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'css3']} />
            <p>CSS3</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'js-square']} />
            <p>JavaScript</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'react']} />
            <p>ReactJS</p>
          </span>
          <span>
            <FontAwesomeIcon id="language-child" icon={['fab', 'ubuntu']} />
            <p>Ubuntu</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
