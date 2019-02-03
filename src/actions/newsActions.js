const FETCH_NEWS_BEGIN = 'FETCH_NEWS_BEGIN';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN,
});

const fetchNewsSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
});

const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  payload: { error },
});

export {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  fetchNewsBegin,
  fetchNewsSuccess,
  fetchNewsFailure,
};
