import React from 'react';
import PropTypes from 'prop-types';

import './Content.css';

const ListContent = ({
  sectionName,
  webTitle,
  webPublicationDate,
  timezone,
}) => (
  <article className="main-content">
    <p className="section">{ sectionName }</p>
    <h2 className="title" title={webTitle}>{ webTitle }</h2>
    <time className="publicatedAt">
      { webPublicationDate }
      <small className="timezone">{ timezone }</small>
    </time>
  </article>
);

ListContent.defaultProps = {
  timezone: 'UTC-3',
};

ListContent.propTypes = {
  sectionName: PropTypes.string.isRequired,
  webTitle: PropTypes.string.isRequired,
  webPublicationDate: PropTypes.string.isRequired,
  timezone: PropTypes.string,
};

export default ListContent;
