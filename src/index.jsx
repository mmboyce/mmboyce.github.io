import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './css/app.css';
import './css/about.css';
import './css/experience.css';
import './css/education.css';
import './css/skills.css';
import './css/interests.css';
import './css/sidebar.css';
import './css/footer.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
