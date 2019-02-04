import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import NewsShowArticle from './Article/Article';

import { fetchShowArticle } from '../../../services/guardian';

class NewsShowContainer extends Component {
  componentDidMount() {
    const { fetchShowArticle: fetch, match: { params: { id } } } = this.props;
    fetch(id, ['trailText', 'thumbnail', 'byline', 'body', 'publication']);
  }

  render() {
    const { article, loading, error } = this.props;
    return (
      <NewsShowArticle
        article={article}
        error={error}
        loading={loading}
      />
    );
  }
}

NewsShowContainer.defaultProps = {
  error: '',
};

NewsShowContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  article: PropTypes.shape({}).isRequired,
  fetchShowArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  article: state.article.article,
  loading: state.main.loading,
  error: state.main.error,
});

export default compose(
  connect(mapStateToProps, { fetchShowArticle }),
  withRouter,
)(NewsShowContainer);
