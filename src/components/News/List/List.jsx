import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import Spinner from '../../Spinner/Spinner';
import NewsListArticle from './Article/Article';

import convertDate from '../../../utils/convertDate';

const NewsList = ({
  isLoading,
  setRef,
  fetchArticles,
  articles,
}) => (
  <Fragment>
    {articles.map(article => (
      <NewsListArticle
        key={article.id}
        id={article.id}
        sectionName={article.sectionName}
        webTitle={article.webTitle}
        webPublicationDate={convertDate(article.webPublicationDate)}
        {...article.fields}
      />
    ))}
    <Button
      handleClick={fetchArticles}
      setRef={setRef}
    >
      {isLoading
        ? <Spinner />
        : 'Load more'}
    </Button>
  </Fragment>
);

NewsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setRef: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      sectionId: PropTypes.string,
      sectionName: PropTypes.string,
      webPublicationDate: PropTypes.string,
      webTitle: PropTypes.string,
      webUrl: PropTypes.string,
      apiUrl: PropTypes.string,
      fields: PropTypes.shape({
        thumbnail: PropTypes.string,
        productionOffice: PropTypes.string,
      }),
      isHosted: PropTypes.bool,
      pillarId: PropTypes.string,
      pillarName: PropTypes.string,
    }),
  ).isRequired,
};

export default NewsList;
