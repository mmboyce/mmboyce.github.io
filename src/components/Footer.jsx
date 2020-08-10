import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../scss/footer.scss';

library.add(fab, faEnvelope);

function Footer() {
  return (
    <div id="footer" className="section">
      <div id="mini" className="icons">
        <a href="mailto:mathieumimmsboyce@gmail.com">
          <FontAwesomeIcon icon="envelope" />
        </a>
        <a href="https://github.com/mmboyce" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
