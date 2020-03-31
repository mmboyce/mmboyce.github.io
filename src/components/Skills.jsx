import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import '../scss/skills.scss';

library.add(fab, faTerminal);

function Skills() {
  return (
    <div className="section">
      <div id="skills" className="section-left">
        <h1>Toolkit</h1>
        <div id="skills-box">
          <div className="languages">
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'java']} />
              <p>Java</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'python']} />
              <p>Python</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'git']} />
              <p>Git</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'html5']} />
              <p>HTML5</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'css3']} />
              <p>CSS3</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'js-square']} />
              <p>JavaScript</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'react']} />
              <p>ReactJS</p>
            </div>
            <div className="tool">
              <FontAwesomeIcon id="language-child" icon={['fab', 'ubuntu']} />
              <p>Ubuntu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
