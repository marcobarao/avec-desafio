import React from 'react';
import PropTypes from 'prop-types';

import './Article.css';

const ListContent = ({
  sectionName,
  webTitle,
  webPublicationDate,
  timezone,
  thumbnail,
  productionOffice,
}) => (
  <article className="main-content">
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
);

ListContent.defaultProps = {
  timezone: 'UTC-3',
};

ListContent.propTypes = {
  sectionName: PropTypes.string.isRequired,
  webTitle: PropTypes.string.isRequired,
  webPublicationDate: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  productionOffice: PropTypes.string.isRequired,
  timezone: PropTypes.string,
};

export default ListContent;
