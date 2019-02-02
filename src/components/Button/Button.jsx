import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({
  children,
  handleClick,
  className,
}) => (
  <button
    type="button"
    className={className}
    onClick={handleClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: 'main-button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
