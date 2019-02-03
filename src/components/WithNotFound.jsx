import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import NotFound from './NotFound/NotFound';

const withNotFound = (WrappedComponent) => {
  const NotFoundInternal = ({ ...props }) => {
    const { error } = props;
    return (
      // Se a variavel error for true a página Not Found
      // Se não mostra o componente
      error
        ? <NotFound />
        : <WrappedComponent {...props} />
    );
  };

  NotFoundInternal.propTypes = {
    error: PropTypes.string.isRequired,
  };

  hoistNonReactStatics(NotFoundInternal, WrappedComponent);

  return NotFoundInternal;
};

export default withNotFound;
