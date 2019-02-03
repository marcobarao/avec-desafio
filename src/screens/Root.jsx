import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreensNewsList from './News/List';
import ScreensNewsShow from './News/Show';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ScreensNewsList} />
      <Route path="/:id+" component={ScreensNewsShow} />
    </Switch>
  </Router>
);

export default ScreensRoot;
