import {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from '../actions/articleActions';

const initialState = {
  article: [],
  loading: true,
  error: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload.article,
      };

    case FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        article: [],
      };

    default:
      return state;
  }
};

export default articleReducer;
