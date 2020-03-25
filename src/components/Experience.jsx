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
          <p>
            This React based app tells the user the weather in a whatever city they enter into the
            {' '}
            search field. It also shows them a gif related to the weather conditions.
          </p>
          <p>
            It uses the API&apos;s of both
            {' '}
            <a href="https://openweathermap.org/">Open Weather Map</a>
            {' '}
            and
            {' '}
            <a href="https://giphy.com/">Giphy</a>
            {' '}
            to fetch the data.
          </p>
          <p>
            Whether you prefer to receive your weather information in Farenheit or Celsius, this
            {' '}
            app has got you covered
          </p>
        </Project>
        <Project
          typeOfProject="project"
          projectID="to-do"
          linkToProject="https://mmboyce.github.io/to-do/"
          sourceLink="https://github.com/mmboyce/to-do"
          firstLine="ToDo"
          secondLine="Sticky Note Web App"
          duration="Jan 2020"
        >
          <p>
            ToDo is a responsive app designed to keep track of your tasks. Using the app, the user
            {' '}
            creates sticky notes containing the name, description, and due date of their tasks.
          </p>
          <p>
            The app can sort the notes by priority, and whether or not the tasks have been
            {' '}
            accomplished already. Additionally, the user can create multiple
            {' '}
            &quot;project boards&quot;
            {' '}
            to keep their notes sectioned with other relevant notes.
            {' '}
            Using local storage, the app keeps your entries saved for next time you use it.
          </p>
          <p>
            Lastly, using responsive design, ToDo is styled for tablet, phone, and desktop use.
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
          <p>
            A browser version of the ultimate competitive game, Tic-Tac-Toe.
          </p>
          <p>
            Grab a friend and play head-to-head and the two of you can finally settle which one of
            {' '}
            you is the most fierce competitor.
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
          <p>
            Calculate to your heart&apos;s desire and rid yourself of the labor of handwriting the
            {' '}
            solution to those pesky equations with Calculator!
          </p>
          <p>
            Check it out today and type in numbers, throw in some operators, and calculate the
            {' '}
            result! Just be careful not to divide anything by 0. I&apos;ve heard that computers do
            {' '}
            not take too kindly to that sort of thing..
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
          <p>
            Utilize your artistic capabilities to illustrate grand designs with Etch-A-Sketch!
          </p>
          <p>
            This app utilizes the mouse&apos;s coordinates, so it is best used on desktop. Hovering
            {' '}
            over a square colors it in, and if you are inclinded you can clear the grid and resize
            {' '}
            it.
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
