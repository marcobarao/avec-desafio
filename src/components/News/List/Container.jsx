import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewsList from './List';

import { fetchListNews } from '../../../services/guardian';

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      scrollY: 0,
    };

    this.setRef = this.setRef.bind(this);
    this.handleObserver = this.handleObserver.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    const { news, fetchListNews: fetch } = this.props;

    if (!news.length) fetch(page, ['thumbnail', 'publication']);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  setRef(moreRef) {
    if (this.observer) this.observer.disconnect();

    if (moreRef) {
      this.moreRef = moreRef;

      const options = {
        root: null,
        rootMargin: '300px',
        threshold: 0.1,
      };

      this.observer = new IntersectionObserver(
        this.handleObserver,
        options,
      );

      this.observer.observe(this.moreRef);
    }
  }

  handleObserver(entities) {
    const { scrollY, page } = this.state;
    const { fetchListNews: fetch } = this.props;
    // Pega a posição atual do scroll no eixo Y
    const { boundingClientRect: { y } } = entities[0];

    if (scrollY > y) {
      this.setState(
        { page: page + 1 },
        () => fetch(page + 1, ['thumbnail', 'publication']),
      );
    }

    this.setState({ scrollY: y });
  }

  render() {
    const {
      loading,
      error,
      news,
      fetchListNews: fetch,
    } = this.props;
    return (
      <NewsList
        news={news}
        loading={loading}
        error={error}
        fetchNews={fetch}
        setRef={this.setRef}
      />
    );
  }
}

NewsListContainer.defaultProps = {
  error: '',
};

NewsListContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchListNews: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: state.news.news,
  loading: state.main.loading,
  error: state.main.error,
});


export default connect(mapStateToProps, { fetchListNews })(NewsListContainer);
