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

const initialState = {
  loading: true,
  error: '',
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BEGIN:
    case FETCH_NEWS_BEGIN:
      return {
        loading: true,
        error: null,
      };

    case FETCH_ARTICLE_SUCCESS:
    case FETCH_NEWS_SUCCESS:
      return {
        loading: false,
        article: action.payload.article,
      };

    case FETCH_ARTICLE_FAILURE:
    case FETCH_NEWS_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default defaultReducer;
