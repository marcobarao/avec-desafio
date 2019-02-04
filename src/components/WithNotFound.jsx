import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import NotFound from './NotFound/NotFound';

const withNotFound = (WrappedComponent) => {
  const NotFoundInternal = ({ ...props }) => {
    const { error } = props;
    return (
      error
        ? <NotFound />
        : <WrappedComponent {...props} />
    );
  };

  NotFoundInternal.defaultProps = {
    error: '',
  };

  NotFoundInternal.propTypes = {
    error: PropTypes.string,
  };

  hoistNonReactStatics(NotFoundInternal, WrappedComponent);

  return NotFoundInternal;
};

export default withNotFound;
