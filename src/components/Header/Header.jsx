import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const UIHeader = ({
  title,
  icon,
  alt,
  handleClick,
}) => (
  <header className="main-header">
    {icon && (
      <button
        type="button"
        className="action"
        onClick={handleClick}
      >
        <img className="icon" src={icon} alt={alt} />
      </button>
    )}
    <h1 className="title" title={title}>{title}</h1>
  </header>
);

UIHeader.defaultProps = {
  title: 'News',
  icon: null,
  alt: '',
  handleClick: () => {},
};

UIHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  alt: PropTypes.string,
  handleClick: PropTypes.func,
};

export default UIHeader;
