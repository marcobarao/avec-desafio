import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import NewsShowArticle from './Article/Article';
import Header from '../../Header/Header';

import guardian from '../../../services/guardian';
import convertDate from '../../../utils/convertDate';

import Back from '../../../assets/icons/back-arrow.svg';
import Spinner from '../../Spinner/Spinner';
import NotFound from '../../NotFound/NotFound';

class NewsShowContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      apiKey: '0d160d0f-71cd-48b0-801f-2fc9cabd2157',
      article: {
        sectionName: '',
        webTitle: '',
        trailText: '',
        byline: '',
        body: '',
        publication: '',
        webPublicationDate: new Date(),
        webUrl: '',
      },
    };

    this.fetchArticle = this.fetchArticle.bind(this);
    this.handleBackPage = this.handleBackPage.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  componentDidMount() {
    this.fetchArticle();
  }

  async fetchArticle() {
    const { match: { params: { id } } } = this.props;

    this.setState({ isLoading: true });

    try {
      const { apiKey } = this.state;
      const content = await guardian.get(`${id}?api-key=${apiKey}&show-fields=trailText,thumbnail,byline,body,publication`);
      this.setState({
        article: content.data.response.content,
        isLoading: false,
      });
    } catch (e) {
      this.setState({ isLoading: false, article: { sectionName: 'Not Found' } });
    }
  }

  handleBackPage() {
    const { history } = this.props;
    history.push({ pathname: '/' });
  }

  renderResult() {
    const { article } = this.state;

    return article.sectionName !== 'Not Found'
      ? (
        <NewsShowArticle
          {...article}
          {...article.fields}
          webPublicationDate={convertDate(article.webPublicationDate)}
        />
      )
      : <NotFound />;
  }

  render() {
    const { article, isLoading } = this.state;

    return (
      <Fragment>
        <Header
          title={article.sectionName}
          icon={Back}
          handleClick={this.handleBackPage}
        />
        {isLoading
          ? <Spinner color="positive" />
          : this.renderResult()}
      </Fragment>
    );
  }
}

NewsShowContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(NewsShowContainer);
