import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import convertDate from '../../../../utils/convertDate';

import './Card.css';
import defaultThumbnail from '../../../../assets/imgs/default.png';

const NewsListCard = ({
  article: {
    id,
    webTitle,
    webPublicationDate,
    sectionName,
    fields: {
      publication,
      thumbnail,
    },
  },
  setOffsetY,
}) => (
  <Link
    className="main-content"
    onClick={() => setOffsetY(window.pageYOffset)}
    to={{ pathname: id }}
  >
    <article className="article">
      <figure className="figure">
        <img className="thumbnail" src={thumbnail || defaultThumbnail} alt="Thumbnail" />
      </figure>
      <div className="content">
        <p className="section">{ sectionName }</p>
        <div className="wrap">
          <h2 className="title" title={webTitle}>{ webTitle }</h2>
        </div>
        <time className="publicatedAt">
          { convertDate(webPublicationDate) }
          <small className="timezone">{`UTC${(new Date().getTimezoneOffset()) / -60}`}</small>
          <small className="office">{ publication }</small>
        </time>
      </div>
    </article>
  </Link>
);

NewsListCard.defaultProps = {
  article: {
    fields: {
      thumbnail: defaultThumbnail,
    },
  },
};

NewsListCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    webTitle: PropTypes.string.isRequired,
    webPublicationDate: PropTypes.string.isRequired,
    sectionName: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      publication: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
    }),
  }),
  setOffsetY: PropTypes.func.isRequired,
};

export default NewsListCard;
