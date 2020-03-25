import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faLink);

function Experience() {
  function Project(props) {
    const {
      typeOfProject, projectID, linkToProject, firstLine, secondLine, duration, children,
    } = props;

    return (
      <div className={typeOfProject} id={projectID}>
        <a href={linkToProject}>
          <FontAwesomeIcon id="fa-link" icon="link" />
          <h2>{firstLine}</h2>
          <h3>{secondLine}</h3>
        </a>
        {children}
        <h4>{duration}</h4>
      </div>
    );
  }

  Project.propTypes = {
    typeOfProject: PropTypes.oneOf([
      'job',
      'project',
    ]).isRequired,
    projectID: PropTypes.string.isRequired,
    linkToProject: PropTypes.string.isRequired,
    firstLine: PropTypes.string.isRequired,
    secondLine: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <div id="experience" className="section">
      <div id="professional">
        <h1>Professional Experience</h1>
        <Project
          typeOfProject="job"
          projectID="geoswap"
          linkToProject="https://www.linkedin.com/company/geoswap"
          firstLine="Software Developer Intern"
          secondLine="GeoSwap"
          duration="June 2018 - August 2018"
        >
          <p>At GeoSwap, I developed a command line utility that deployed multiple targeted advertisements on Facebook&apos;s Audience Network in an instant.</p>
          <p>Additionally, I created a GUI for the utility for those at the company not familiar with the CLI.</p>
          <p>I created a wiki for the codebase so that the entire project would be sufficiently documented for future programmers. I also wrote all unit and integration tests for the tool.</p>
        </Project>
      </div>
      <div id="projects">
        <h1>Projects</h1>
        <Project
          typeOfProject="project"
          projectID="estuary-escapade"
          linkToProject="https://github.com/mmboyce/Estuary-Escapade"
          firstLine="Estuary Escapade"
          secondLine="Educational Game"
          duration="November 2018 - December 2018"
        >
          <p>
            Estuary Escapade is an educational game made for display at
            {' '}
            <a href="https://dnrec.alpha.delaware.gov/">DNREC&apos;s</a>
            {' '}
            offices. Its purpose is to teach children on field trips about the tasks of an Estuary Researcher and the fish researched in the Delaware Bay.
          </p>
          <p>
            I worked on Estuary Escapade with 4 other team members. Regular meetings were held to establish
            each team member&apos;s tasks for each sprint of the project. We created  Alpha, Beta, and Final
            presentations throughout development to show to the client. I handled much of the JavaDoc
            documentation, and work on the game&apos;s logic.
          </p>
        </Project>
        <Project
          typeOfProject="project"
          projectID="grenzy"
          linkToProject="https://github.com/mmboyce/grenzy"
          firstLine="Grenzy"
          secondLine="Smartphone Game"
          duration="April 2017"
        >
          <p>Grenzy is a game in which the player takes the role of a fish that eats smaller fish. The player must avoid being eaten by larger fish. The more fish the player eats, the greater their score.</p>
          <p>Grenzy was developed with the MVC development principle in mind. I collaborated with another team member to design the game. I programmed the random generation of fish, as well as the method of which the powerups and fish in the game move.</p>
        </Project>
      </div>
    </div>
  );
}

export default Experience;
