import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/app'; // Root layout

export default (
  <Route path="/">
    <IndexRoute component={ App }/>
  </Route>
);