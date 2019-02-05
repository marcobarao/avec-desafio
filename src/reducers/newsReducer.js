import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../actions/newsActions';

const initialState = {
  news: [],
  page: 1,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_BEGIN:
      return {
        ...state,
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: [...state.news, ...action.payload.news],
        page: state.page + 1,
      };

    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default newsReducer;
