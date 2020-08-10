import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../scss/about.scss';

import Me from './Me';

library.add(fab, faEnvelope);

function About() {
  return (
    <div className="section" id="about-container">
      <div id="about">
        <Me />
        <h1>
          W Mathieu Mimms-Boyce
        </h1>
        <p>
          I am a software developer based in New Castle, Delaware.
        </p>
        <p>
          I&apos;ve worked for
          {' '}
          <a href="https://www.linkedin.com/company/geoswap">GeoSwap</a>
          , a Wilmington, DE based startup, and I&apos;ve created a several projects that you can
          {' '}
          find below!
        </p>
        <div className="icons">
          <a href="mailto:mathieumimmsboyce@gmail.com">
            <FontAwesomeIcon icon="envelope" />
          </a>
          <a href="https://github.com/mmboyce" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
