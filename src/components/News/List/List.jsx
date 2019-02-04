import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import Button from '../../Button/Button';
import Spinner from '../../Spinner/Spinner';
import NewsListCard from './Card/Card';

import withLoadingScreen from '../../WithLoadingScreen';
import withNotFound from '../../WithNotFound';

const NewsList = ({
  loading,
  setRef,
  fetchNews,
  news,
}) => (
  <Fragment>
    {news.map(article => (
      <NewsListCard
        key={article.id}
        article={article}
      />
    ))}
    <Button
      handleClick={fetchNews}
      setRef={setRef}
    >
      {loading
        ? <Spinner />
        : 'Load more'}
    </Button>
  </Fragment>
);

NewsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  setRef: PropTypes.func.isRequired,
  fetchNews: PropTypes.func.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(
  withLoadingScreen,
  withNotFound,
)(NewsList);
