import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Article.css';

const NewsListArticle = ({
  id,
  sectionName,
  webTitle,
  webPublicationDate,
  timezone,
  thumbnail,
  productionOffice,
}) => (
  <Link
    className="main-content"
    to={id}
  >
    <article className="article">
      <figure className="figure">
        <img className="thumbnail" src={thumbnail} alt="Thumbnail" />
      </figure>
      <div className="content">
        <p className="section">{ sectionName }</p>
        <div className="wrap">
          <h2 className="title" title={webTitle}>{ webTitle }</h2>
        </div>
        <time className="publicatedAt">
          { webPublicationDate }
          <small className="timezone">{ timezone }</small>
          <small className="office">{ productionOffice }</small>
        </time>
      </div>
    </article>
  </Link>
);

NewsListArticle.defaultProps = {
  timezone: 'UTC-3',
};

NewsListArticle.propTypes = {
  id: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  webTitle: PropTypes.string.isRequired,
  webPublicationDate: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  productionOffice: PropTypes.string.isRequired,
  timezone: PropTypes.string,
};

export default NewsListArticle;
