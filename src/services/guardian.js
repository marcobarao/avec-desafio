import axios from 'axios';
import {
  fetchNewsBegin,
  fetchNewsSuccess,
  fetchNewsFailure,
} from '../actions/newsActions';

import {
  fetchArticleBegin,
  fetchArticleSuccess,
  fetchArticleFailure,
} from '../actions/articleActions';

const API_KEY = '0d160d0f-71cd-48b0-801f-2fc9cabd2157';
const guardian = axios.create({
  baseURL: 'https://content.guardianapis.com/',
});

const fetchListNews = (page, fields) => (
  async (dispatch) => {
    dispatch(fetchNewsBegin());
    // Tenta trazer todas as notícias, caso dê algum status code diferente de 200 dá FAIL
    // Caso dê certo seta o resultado
    try {
      const response = await guardian.get(`search?api-key=${API_KEY}&page-size=48&page=${page}&show-fields=${fields}`);
      dispatch(fetchNewsSuccess(response.data.response.results));
    } catch (e) {
      dispatch(fetchNewsFailure(e));
    }
  }
);

const fetchShowArticle = (id, fields) => (
  async (dispatch) => {
    dispatch(fetchArticleBegin());
    // Tenta trazer todas as notícias, caso dê algum status code diferente de 200 dá FAIL
    // Caso dê certo seta o resultado
    try {
      const response = await guardian.get(`${id}?api-key=${API_KEY}&show-fields=${fields}`);
      dispatch(fetchArticleSuccess(response.data.response.content));
    } catch (e) {
      dispatch(fetchArticleFailure('Not Found'));
    }
  }
);

export { fetchListNews, fetchShowArticle };
