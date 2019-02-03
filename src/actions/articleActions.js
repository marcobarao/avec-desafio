const FETCH_ARTICLE_BEGIN = 'FETCH_ARTICLE_BEGIN';
const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

const fetchArticleBegin = () => ({
  type: FETCH_ARTICLE_BEGIN,
});

const fetchArticleSuccess = article => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload: { article },
});

const fetchArticleFailure = error => ({
  type: FETCH_ARTICLE_FAILURE,
  payload: { error },
});

export {
  FETCH_ARTICLE_BEGIN,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  fetchArticleBegin,
  fetchArticleSuccess,
  fetchArticleFailure,
};
