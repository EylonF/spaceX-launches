import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  as Router } from 'react-router-dom'

import './assets/styles/styles.scss';
import {RootCmp} from './RootCmp';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <RootCmp />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

