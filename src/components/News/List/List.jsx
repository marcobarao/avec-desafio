import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Article from '../Article/Article';

import convertDate from '../../../utils/convertDate';

const NewsList = ({ articles }) => (
  <div className="main-container">
    {
      articles.map(article => (
        <Link to={article.id}>
          <Article
            key={article.id}
            {...article}
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
