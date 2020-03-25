/* eslint-disable max-len */
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
      sourceLink,
    } = props;

    let sourceRef = '';

    if (sourceLink !== '') {
      sourceRef = <a href={sourceLink} className="source-link">(source code)</a>;
    }

    return (
      <div className={typeOfProject} id={projectID}>
        <a href={linkToProject}>
          <FontAwesomeIcon id="fa-link" icon="link" />
          <h2>
            {firstLine}
          </h2>
          <h3>{secondLine}</h3>
        </a>
        {sourceRef}
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
    sourceLink: PropTypes.string,
  };

  Project.defaultProps = {
    sourceLink: '',
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
          <p>
            At GeoSwap, I developed a command line utility that deployed multiple targeted
            {' '}
            advertisements on Facebook&apos;s Audience Network in an instant.
          </p>
          <p>
            Additionally, I created a GUI for the utility for those at the company not familiar
            {' '}
            with the CLI.
          </p>
          <p>
            I created a wiki for the codebase so that the entire project would be sufficiently
            {' '}
            documented for future programmers. I also wrote all unit and integration tests for the
            {' '}
            tool.
          </p>
        </Project>
      </div>
      <div id="projects">
        <h1>Projects</h1>
        <Project
          typeOfProject="project"
          projectID="weather"
          linkToProject="https://mmboyce.github.io/weather-app"
          sourceLink="https://github.com/mmboyce/weather-app"
          firstLine="Weather"
          secondLine="Web App"
          duration="Mar 2020"
        >
          {/* TODO: Fill out the description of this project */}
          <p>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae commodi qui, repellat omnis assumenda dicta nihil excepturi quos a consequuntur accusamus nam rerum illo tenetur impedit deserunt ducimus nulla! Sit!</span>
            <span>In, aut quas! Obcaecati animi vitae unde quam inventore quaerat modi voluptas fugit eum. Natus voluptatibus id, assumenda tempore quasi exercitationem accusantium vitae aliquid excepturi perspiciatis esse iure eius itaque.</span>
            <span>Dolore recusandae quidem quia saepe a amet repudiandae placeat fuga aut? Ipsam voluptas veritatis cumque atque iste dolorem modi minus, ipsum similique dicta aut inventore quasi id, hic ratione maiores.</span>
          </p>
        </Project>
        <Project
          typeOfProject="project"
          projectID="to-do"
          linkToProject="https://mmboyce.github.io/to-do/"
          sourceLink="https://github.com/mmboyce/to-do"
          firstLine="To Do"
          secondLine="Task Tracking Web App"
          duration="Jan 2020"
        >
          {/* TODO: Fill out the description of this project */}
          <p>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium beatae dolores, unde ut quod provident corrupti atque ipsa est architecto dolor deserunt voluptates veniam autem minus impedit quaerat et ducimus.</span>
            <span>Provident numquam sint quas corporis ratione ex? Nisi iste neque porro quidem nemo magni alias, assumenda, corporis nesciunt placeat nostrum itaque quibusdam repudiandae, incidunt rerum maiores doloremque illo aut molestias?</span>
            <span>Ipsa culpa, amet earum suscipit laboriosam minima fuga quaerat maiores recusandae eos aperiam at doloremque porro veritatis repellendus nulla vel hic tempore corporis rem omnis mollitia quo. At, fuga ea.</span>
          </p>
        </Project>
        <Project
          typeOfProject="project"
          projectID="tic-tac-toe"
          linkToProject="https://mmboyce.github.io/tic-tac-toe/"
          sourceLink="https://github.com/mmboyce/tic-tac-toe"
          firstLine="Tic-Tac-Toe"
          secondLine="Competitive Game"
          duration="Jan 2020"
        >
          {/* TODO: Fill out the description of this project */}
          <p>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium beatae dolores, unde ut quod provident corrupti atque ipsa est architecto dolor deserunt voluptates veniam autem minus impedit quaerat et ducimus.</span>
            <span>Provident numquam sint quas corporis ratione ex? Nisi iste neque porro quidem nemo magni alias, assumenda, corporis nesciunt placeat nostrum itaque quibusdam repudiandae, incidunt rerum maiores doloremque illo aut molestias?</span>
            <span>Ipsa culpa, amet earum suscipit laboriosam minima fuga quaerat maiores recusandae eos aperiam at doloremque porro veritatis repellendus nulla vel hic tempore corporis rem omnis mollitia quo. At, fuga ea.</span>
          </p>
        </Project>
        <Project
          typeOfProject="project"
          projectID="calculator"
          linkToProject="https://mmboyce.github.io/calculator/"
          sourceLink="https://github.com/mmboyce/calculator"
          firstLine="Calculator"
          secondLine="Number Processing Web App"
          duration="Jan 2020"
        >
          {/* TODO: Fill out the description of this project */}
          <p>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium beatae dolores, unde ut quod provident corrupti atque ipsa est architecto dolor deserunt voluptates veniam autem minus impedit quaerat et ducimus.</span>
            <span>Provident numquam sint quas corporis ratione ex? Nisi iste neque porro quidem nemo magni alias, assumenda, corporis nesciunt placeat nostrum itaque quibusdam repudiandae, incidunt rerum maiores doloremque illo aut molestias?</span>
            <span>Ipsa culpa, amet earum suscipit laboriosam minima fuga quaerat maiores recusandae eos aperiam at doloremque porro veritatis repellendus nulla vel hic tempore corporis rem omnis mollitia quo. At, fuga ea.</span>
          </p>
        </Project>
        <Project
          typeOfProject="project"
          projectID="etch-a-sketch"
          linkToProject="https://mmboyce.github.io/etch-a-sketch/"
          sourceLink="https://github.com/mmboyce/etch-a-sketch"
          firstLine="Etch-a-Sketch"
          secondLine="Grid-Based Drawing Web App"
          duration="Dec 2020"
        >
          {/* TODO: Fill out the description of this project */}
          <p>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium beatae dolores, unde ut quod provident corrupti atque ipsa est architecto dolor deserunt voluptates veniam autem minus impedit quaerat et ducimus.</span>
            <span>Provident numquam sint quas corporis ratione ex? Nisi iste neque porro quidem nemo magni alias, assumenda, corporis nesciunt placeat nostrum itaque quibusdam repudiandae, incidunt rerum maiores doloremque illo aut molestias?</span>
            <span>Ipsa culpa, amet earum suscipit laboriosam minima fuga quaerat maiores recusandae eos aperiam at doloremque porro veritatis repellendus nulla vel hic tempore corporis rem omnis mollitia quo. At, fuga ea.</span>
          </p>
        </Project>
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
            offices. Its purpose is to teach children on field trips about the tasks of an Estuary
            {' '}
            Researcher and the fish researched in the Delaware Bay.
          </p>
          <p>
            I worked on Estuary Escapade with 4 other team members. Regular meetings were held
            {' '}
            to establish
            {' '}
            each team member&apos;s tasks for each sprint of the project. We created  Alpha, Beta,
            {' '}
            and Final
            {' '}
            presentations throughout development to show to the client. I handled much of the
            {' '}
            JavaDoc documentation, and work on the game&apos;s logic.
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
          <p>
            Grenzy is a game in which the player takes the role of a fish that eats smaller fish.
            {' '}
            The player must avoid being eaten by larger fish. The more fish the player eats,
            {' '}
            the greater their score.
          </p>
          <p>
            Grenzy was developed with the MVC development principle in mind. I collaborated with
            {' '}
            another team member to design the game. I programmed the random generation of fish,
            {' '}
            as well as the method of which the powerups and fish in the game move.
          </p>
        </Project>
      </div>
    </div>
  );
}

export default Experience;
