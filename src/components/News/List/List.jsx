import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Article from '../Article/Article';

import convertDate from '../../../utils/convertDate';

import './List.css';

const NewsList = ({ articles }) => (
  <div className="main-container">
    {
      articles.map(article => (
        <Link
          key={article.id}
          className="wrap"
          to={article.id}
        >
          <Article
            {...article}
            {...article.fields}
            webPublicationDate={convertDate(article.webPublicationDate)}
          />
        </Link>
      ))
    }
  </div>
);

NewsList.propTypes = {
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
        trailText: PropTypes.string,
        productionOffice: PropTypes.string,
      }),
      isHosted: PropTypes.bool,
      pillarId: PropTypes.string,
      pillarName: PropTypes.string,
    }),
  ).isRequired,
};

export default NewsList;
