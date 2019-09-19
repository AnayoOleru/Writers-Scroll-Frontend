import actionType from '../constants/article.constants';

const initialState = {
  articleData: [],
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articleData: action.articles,
      };
    case actionType.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
      };
    case actionType.POST_ARTICLES_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case actionType.POST_ARTICLES_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default articles;
