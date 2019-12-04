import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faLink);

class Experience extends React.Component {
    render(){
        return(
            <div id="experience" class="section">
                <div id="professional">
                    <h1>Professional Experience</h1>
                    <div class="job" id="geoswap">
                        <a href="http://www.geoswap.com">
                            <FontAwesomeIcon id="fa-link" icon="link"/>
                            <h2>Software Developer Intern</h2>
                            <h3>GeoSwap</h3>
                        </a>
                        <p>At GeoSwap, I developed a command line utility that deployed multiple targeted advertisements on Facebook's Audience Network in an instant.</p>
                        <p>Additionally, I created a GUI for the utility for those at the company not familiar with the CLI.</p>
                        <p>I created a wiki for the codebase so that the entire project would be sufficiently documented for future programmers. I also wrote all unit and integration tests for the tool.</p>
                        <h4>June 2018 - August 2018</h4>
                    </div>
                </div>
                <div id="projects">
                    <h1>Projects</h1>
                    <div class="project" id="estuary-escapade">
                        <a href="https://github.com/mmboyce/Estuary-Escapade">
                            <FontAwesomeIcon id="fa-link" icon="link"/>
                            <h2>Estuary Escapade</h2>
                            <h3>Educational Game</h3>
                        </a>
                        <p>Estuary Escapade is an educational game made for display at <a href="https://dnrec.alpha.delaware.gov/">DNREC's</a> offices. Its purpose is to teach children on field trips about the tasks of an Estuary Researcher and the fish researched in the Delaware Bay.</p>
                        <p>I worked on Estuary Escapade with 4 other team members. Regular meetings were held to establish each team member's tasks for each sprint of the project. We created  Alpha, Beta, and Final presentations throughout development to show to the client. I handled much of the JavaDoc documentation, and work on the game's logic. </p>
                        <h4>November 2018 - December 2018</h4>
                    </div>
                    <div class="project" id="grenzy">
                        <a href="https://github.com/mmboyce/grenzy">
                            <FontAwesomeIcon id="fa-link" icon="link"/>
                            <h2>Grenzy</h2>
                            <h3>Smartphone Game</h3>
                        </a>
                        <p>Grenzy is a game in which the player takes the role of a fish that eats smaller fish. The player must avoid being eaten by larger fish. The more fish the player eats, the greater their score.</p>
                        <p>Grenzy was developed with the MVC development principle in mind. I collaborated with another team member to design the game. I programmed the random generation of fish, as well as the method of which the powerups and fish in the game move.</p>
                        <h4>April 2017</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;