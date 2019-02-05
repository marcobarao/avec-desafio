import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewsList from './List';

import { setNewOffsetY } from '../../../actions/mainActions';
import { fetchListNews } from '../../../services/guardian';

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };

    this.setRef = this.setRef.bind(this);
    this.handleObserver = this.handleObserver.bind(this);
  }

  componentDidMount() {
    const {
      news,
      page,
      fetchListNews: fetch,
      offsetY,
    } = this.props;

    this.setState({ scrollY: offsetY });

    window.scrollTo(0, offsetY);


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
    const { scrollY } = this.state;
    const { fetchListNews: fetch, page } = this.props;
    // Pega a posição atual do scroll no eixo Y
    const { boundingClientRect: { y } } = entities[0];

    if (scrollY > y) {
      fetch(page, ['thumbnail', 'publication']);
    }

    this.setState({ scrollY: y });
  }

  render() {
    const {
      loading,
      error,
      news,
      fetchListNews: fetch,
      setNewOffsetY: setOffsetY,
    } = this.props;
    return (
      <NewsList
        news={news}
        loading={loading}
        error={error}
        fetchNews={fetch}
        setRef={this.setRef}
        setOffsetY={setOffsetY}
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
  page: PropTypes.number.isRequired,
  fetchListNews: PropTypes.func.isRequired,
  setNewOffsetY: PropTypes.func.isRequired,
  offsetY: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  news: state.news.news,
  page: state.news.page,
  loading: state.main.loading,
  error: state.main.error,
  offsetY: state.main.offsetY,
});


export default connect(mapStateToProps, { fetchListNews, setNewOffsetY })(NewsListContainer);
