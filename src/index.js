import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index.js';
import About from './containers/About'
import Resume from './containers/Resume'
import Projects from './containers/Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router basename="/dev-portfolio" component={About}>
    <Route exact path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/projects" component={Projects}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
