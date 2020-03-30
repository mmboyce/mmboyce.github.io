import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './css/app.scss';
import './css/about.scss';
import './css/experience.scss';
import './css/education.scss';
import './css/skills.scss';
import './css/interests.scss';
import './css/sidebar.scss';
import './css/footer.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
