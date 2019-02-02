import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensNewsList from './News/List';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ScreensNewsList} />
    </Switch>
  </Router>
);

export default ScreensRoot;
