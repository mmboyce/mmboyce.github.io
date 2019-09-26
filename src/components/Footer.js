import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faEnvelope);

class Footer extends React.Component{
    render(){
        return (
            <div id='footer'>
                <div id="mini" class="icons">
                    <a href="https://www.linkedin.com/in/mmboyce/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    <a href="mailto:mathieumimmsboyce@gmail.com">
                        <FontAwesomeIcon icon="envelope"/>
                    </a>
                    <a href="https://github.com/mmboyce" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <p> this website was created by W Mathieu Mimms-Boyce :) </p>
                </div>
            </div>
        );
    }
}

export default Footer;