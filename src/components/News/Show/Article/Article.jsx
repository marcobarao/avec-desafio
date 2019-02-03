import React from 'react';
import PropTypes from 'prop-types';

import './Article.css';
import defaultThumbnail from '../../../../assets/imgs/default.png';

const NewsShowArticle = ({
  webTitle,
  trailText,
  thumbnail,
  byline,
  body,
  publication,
  webPublicationDate,
  webUrl,
}) => (
  <article className="main-article">
    <h2 className="title">{ webTitle }</h2>
    <h3
      className="subtitle"
      dangerouslySetInnerHTML={{ __html: trailText }}
    />
    <p className="byline">
      <strong>{`By ${byline}, ${publication} `}</strong>
      {` - ${webPublicationDate}`}
    </p>
    <figure className="figure">
      <img className="thumbnail" src={thumbnail} alt="Thumbnail" />
    </figure>
    <div
      className="body"
      dangerouslySetInnerHTML={{ __html: body }}
    />
    <p className="original">
      See on the oficial
      <a href={webUrl}>
        website
      </a>
    </p>
  </article>
);

NewsShowArticle.defaultProps = {
  thumbnail: defaultThumbnail,
};

NewsShowArticle.propTypes = {
  webTitle: PropTypes.string.isRequired,
  trailText: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
  webPublicationDate: PropTypes.string.isRequired,
  webUrl: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};

export default NewsShowArticle;
