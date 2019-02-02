import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({
  children,
  handleClick,
  className,
  setRef,
}) => (
  <button
    type="button"
    className={className}
    onClick={handleClick}
    ref={setRef}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: 'main-button',
  setRef: () => {},
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  setRef: PropTypes.func,
};

export default Button;
