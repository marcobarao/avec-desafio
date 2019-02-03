import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import Spinner from '../../Spinner/Spinner';
import NewsListCard from './Card/Card';

import convertDate from '../../../utils/convertDate';
import withLoadingScreen from '../../WithLoading';

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
        id={article.id}
        sectionName={article.sectionName}
        webTitle={article.webTitle}
        webPublicationDate={convertDate(article.webPublicationDate)}
        {...article.fields}
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

export default withLoadingScreen(NewsList);
