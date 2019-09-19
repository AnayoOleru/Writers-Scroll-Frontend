import actionTypes from '../constants/my-articles.constants';
import filter from '../utils/filterArticles';

const initialState = {
  fetching: false,
  fetched: false,
  articles: [],
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES': {
      return { ...state, fetching: true };
    }
    case 'ARTICLES_RETURNED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.payload,
      };
    }
    case actionTypes.DELETE_ARTICLES_SUCCESS: {
      const newArticlesList = filter(state.articles, action.articleId);
      return {
        ...state,
        articles: newArticlesList,
      };
    }
    case actionTypes.DELETE_ARTICLES_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
