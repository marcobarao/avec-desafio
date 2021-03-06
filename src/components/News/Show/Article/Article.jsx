import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import parse from 'html-react-parser';

import './Article.css';
import defaultThumbnail from '../../../../assets/imgs/default.png';

import withLoadingScreen from '../../../WithLoadingScreen';
import withNotFound from '../../../WithNotFound';
import convertDate from '../../../../utils/convertDate';

const NewsShowArticle = ({
  article: {
    webTitle,
    webPublicationDate,
    webUrl,
    fields: {
      trailText,
      thumbnail = defaultThumbnail,
      byline,
      body,
      publication,
    },
  },
}) => (
  <article className="main-article">
    <h2 className="title">{ webTitle }</h2>
    <h3
      className="subtitle"
    >
      {parse(trailText)}
    </h3>
    <p className="byline">
      <strong>{`By ${byline}, ${publication} `}</strong>
      {` - ${convertDate(webPublicationDate)}`}
    </p>
    <figure className="figure">
      <img className="thumbnail" src={thumbnail} alt="Thumbnail" />
    </figure>
    <div
      className="body"
    >
      {parse(body)}
    </div>
    <p className="original">
      See on the oficial
      <a href={webUrl}>
        website
      </a>
    </p>
  </article>
);

NewsShowArticle.propTypes = {
  article: PropTypes.shape({
    webTitle: PropTypes.string.isRequired,
    webPublicationDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    webUrl: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      trailText: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      byline: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      publication: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default compose(
  withNotFound,
  withLoadingScreen,
)(NewsShowArticle);
