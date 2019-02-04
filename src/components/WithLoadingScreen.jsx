import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import Spinner from './Spinner/Spinner';

const withLoadingScreen = (WrappedComponent) => {
  const LoadingScreen = ({ ...props }) => {
    const { loading, news } = props;
    return (
      loading && !news.length
        ? <Spinner color="positive" />
        : <WrappedComponent {...props} />
    );
  };

  LoadingScreen.defaultProps = {
    news: [],
  };

  LoadingScreen.propTypes = {
    loading: PropTypes.bool.isRequired,
    news: PropTypes.arrayOf(PropTypes.object),
  };

  hoistNonReactStatics(LoadingScreen, WrappedComponent);

  return LoadingScreen;
};

export default withLoadingScreen;
