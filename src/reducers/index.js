import { combineReducers } from 'redux';

import news from './newsReducer';
import article from './articleReducer';
import main from './mainReducer';

export default combineReducers({
  main,
  news,
  article,
});
