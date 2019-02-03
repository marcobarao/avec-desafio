import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScreensNewsList from './News/List';
import ScreensNewsShow from './News/Show';

import Header from '../components/Header/Header';

import Back from '../assets/icons/back-arrow.svg';

const ScreensRoot = ({ article, error }) => (
  <Router>
    <Fragment>
      <Route
        render={({ history, location: { pathname } }) => (
          <Header
            title={article.sectionName || error || 'NewsFeed'}
            icon={pathname !== '/' ? Back : null}
            handleClick={() => history.push('/')}
          />
        )}
      />
      <Route exact path="/" component={ScreensNewsList} />
      <Route path="/:id+" component={ScreensNewsShow} />
    </Fragment>
  </Router>
);

ScreensRoot.defaultProps = {
  error: '',
};

ScreensRoot.propTypes = {
  article: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  article: state.article.article,
  error: state.article.error,
});

export default connect(mapStateToProps)(ScreensRoot);
