import React, { Component, Fragment } from 'react';

import Header from '../../Header/Header';
import Button from '../../Button/Button';
import Spinner from '../../Spinner/Spinner';
import NewsList from './List';

import guardian from '../../../services/guardian';

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      apiKey: '0d160d0f-71cd-48b0-801f-2fc9cabd2157',
      page: 1,
      perPage: 40,
      articles: [],
    };

    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    this.setState({ isLoading: true });
    try {
      const {
        apiKey,
        articles,
        page,
        perPage,
      } = this.state;
      const content = await guardian.get(`search?api-key=${apiKey}&page-size=${perPage}&page=${page}&show-fields=thumbnail,trailText,productionOffice`);
      const { data: { response: { results } } } = content;
      this.setState({
        articles: [...articles, ...results],
        page: page + 1,
        isLoading: false,
      });
    } catch (e) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <Fragment>
        <Header title="NewsFeed" />
        <NewsList articles={articles} />
        <Button handleClick={this.fetchArticles}>
          {
            isLoading
              ? <Spinner />
              : 'Load more'
          }
        </Button>
      </Fragment>
    );
  }
}

export default NewsListContainer;
