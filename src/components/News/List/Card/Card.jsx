import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Card.css';
import defaultThumbnail from '../../../../assets/imgs/default.png';

const NewsListCard = ({
  id,
  sectionName,
  webTitle,
  webPublicationDate,
  timezone,
  thumbnail,
  publication,
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
          <small className="office">{ publication }</small>
        </time>
      </div>
    </article>
  </Link>
);

NewsListCard.defaultProps = {
  timezone: 'UTC-3',
  thumbnail: defaultThumbnail,
};

NewsListCard.propTypes = {
  id: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  webTitle: PropTypes.string.isRequired,
  webPublicationDate: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  publication: PropTypes.string.isRequired,
  timezone: PropTypes.string,
};

export default NewsListCard;
