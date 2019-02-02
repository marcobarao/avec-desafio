import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

const Spinner = ({ color }) => (
  <div className={`main-spinner -${color}`}>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);

Spinner.defaultProps = {
  color: 'negative',
};

Spinner.propTypes = {
  color: PropTypes.oneOf(['negative', 'positive']),
};


export default Spinner;
