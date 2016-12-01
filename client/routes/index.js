import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/app'; // Root layout

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ App } />
  </Router>
  
  // <Router history={browserHistory}>
  //   <Route component={ App } />
  //     <Route path='/'>
      
  //     </Route>
  //   </Route>
  // </Router>
);