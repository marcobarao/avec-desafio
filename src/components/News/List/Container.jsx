import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewsList from './List';

import { fetchListNews } from '../../../services/guardian';

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      scrollY: 0,
    };

    this.setRef = this.setRef.bind(this);
    this.handleObserver = this.handleObserver.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    const { news, fetchListNews: fetch } = this.props;

    // Busca as notícias pela página e passa os fields que quer como resposta
    if (!news.length) fetch(page, ['thumbnail', 'publication']);
  }

  componentWillUnmount() {
    // Quando for desmontar o componente desabilita o observador
    this.observer.disconnect();
  }

  setRef(moreRef) {
    // Quando renderiza verifica se há um observador em ação e desabilita
    // Para não ter multiplos observadores de uma vez
    if (this.observer) this.observer.disconnect();

    // Verifica se a referencia não é nula seta o valor e cria um novo observador
    if (moreRef) {
      this.moreRef = moreRef;

      // Configura as opções do observador
      const options = {
        root: null, // Pega a página como refêrencia para o scroll
        rootMargin: '150px', // Adiciona um range maior para o observador
        threshold: 0.1, // Porcentagem necessária do elemento na tela para executar o callback
      };

      // Cria o novo observador
      this.observer = new IntersectionObserver(
        this.handleObserver,
        options,
      );

      // Seta o botão de carregar mais como referência para o observador/
      this.observer.observe(this.moreRef);
    }
  }

  // Callback executado pelo observador quando o botão entra na tela
  handleObserver(entities) {
    const { scrollY, page } = this.state;
    const { fetchListNews: fetch } = this.props;
    // Pega a posição atual do scroll no eixo Y
    const { boundingClientRect: { y } } = entities[0];

    // Verifica se a pessoa está dando scroll para baixo
    if (scrollY > y) {
      this.setState(
        { page: page + 1 },
        () => fetch(page + 1, ['thumbnail', 'publication']),
      );
    }

    this.setState({ scrollY: y });
  }

  render() {
    const { loading, news, fetchListNews: fetch } = this.props;
    return (
      <NewsList
        news={news}
        loading={loading}
        fetchNews={fetch}
        setRef={this.setRef}
      />
    );
  }
}

NewsListContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchListNews: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: state.news.news,
  loading: state.news.loading,
});


export default connect(mapStateToProps, { fetchListNews })(NewsListContainer);
