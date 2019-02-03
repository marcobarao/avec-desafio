import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import NewsShowArticle from './Article/Article';

import { fetchShowArticle } from '../../../services/guardian';
import convertDate from '../../../utils/convertDate';


class NewsShowContainer extends Component {
  componentDidMount() {
    const { fetchShowArticle: fetch, match: { params: { id } } } = this.props;
    // Busca a notícia com os dados passado como parametro
    fetch(id, ['trailText', 'thumbnail', 'byline', 'body', 'publication']);
  }

  render() {
    const { article, loading, error } = this.props;
    return (
      <NewsShowArticle
        news={article}
        error={error}
        {...article}
        {...article.fields}
        webPublicationDate={convertDate(article.webPublicationDate)}
        loading={loading}
      />
    );
  }
}

NewsShowContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  article: PropTypes.shape({}).isRequired,
  fetchShowArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  article: state.article.article,
  loading: state.article.loading,
  error: state.article.error,
});

export default compose(
  connect(mapStateToProps, { fetchShowArticle }),
  withRouter,
)(NewsShowContainer);
