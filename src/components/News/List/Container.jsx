import React, { Component, Fragment } from 'react';

import Header from '../../Header/Header';
import NewsList from './List';

import guardian from '../../../services/guardian';

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      apiKey: '0d160d0f-71cd-48b0-801f-2fc9cabd2157',
      page: 1,
      perPage: 48,
      articles: [],
      scrollY: 0,
    };

    this.fetchArticles = this.fetchArticles.bind(this);
    this.setRef = this.setRef.bind(this);
    this.handleObserver = this.handleObserver.bind(this);
  }

  componentDidMount() {
    this.fetchArticles();

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver,
      options,
    );

    this.observer.observe(this.moreRef);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  setRef(moreRef) {
    this.moreRef = moreRef;
  }

  handleObserver(entities) {
    const { scrollY } = this.state;
    const { boundingClientRect: { y } } = entities[0];

    if (scrollY > y) this.fetchArticles();

    this.setState({ scrollY: y });
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
      const content = await guardian.get(`search?api-key=${apiKey}&page-size=${perPage}&page=${page}&show-fields=thumbnail,productionOffice`);
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
        <Header />
        <NewsList
          articles={articles}
          isLoading={isLoading}
          setRef={this.setRef}
          fetchArticles={this.fetchArticles}
        />
      </Fragment>
    );
  }
}

export default NewsListContainer;
