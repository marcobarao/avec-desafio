import {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from '../actions/articleActions';

import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../actions/newsActions';

import {
  CLICK_ARTICLE,
} from '../actions/mainActions';

const initialState = {
  loading: true,
  error: '',
  offsetY: 0,
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BEGIN:
    case FETCH_NEWS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ARTICLE_SUCCESS:
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload.article,
      };

    case FETCH_ARTICLE_FAILURE:
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CLICK_ARTICLE:
      return {
        ...state,
        offsetY: action.payload.offsetY,
      };
    default:
      return state;
  }
};

export default defaultReducer;
