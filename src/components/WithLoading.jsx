import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import Spinner from './Spinner/Spinner';

const withLoadingScreen = (WrappedComponent) => {
  const LoadingScreen = ({ ...props }) => {
    const { loading, news } = props;
    return (
      // Se o loading for true e não tiver nenhuma noticia exibe o Spinner
      // Se não mostra o componente
      loading && !news.length
        ? <Spinner color="positive" />
        : <WrappedComponent {...props} />
    );
  };

  LoadingScreen.propTypes = {
    loading: PropTypes.bool.isRequired,
    news: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
    ]).isRequired,
  };

  hoistNonReactStatics(LoadingScreen, WrappedComponent);

  return LoadingScreen;
};

export default withLoadingScreen;
