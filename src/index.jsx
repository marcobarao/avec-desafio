import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ScreensRoot from './screens/Root';

import store from './store';

import './assets/styles/Base.css';
import './assets/styles/Reset.css';

ReactDOM.render(
  <Provider store={store}>
    <ScreensRoot />
  </Provider>,
  document.getElementById('root'),
);
