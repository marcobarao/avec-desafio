import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({
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

Header.defaultProps = {
  title: '',
  icon: null,
  alt: '',
  handleClick: () => {},
};

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  alt: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Header;
