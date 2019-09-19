import actionTypes from '../constants/reported.contants';

const initialState = {
  reportedArticle: [],
};

const updateState = (id, commentBody, state) => {
  const report = state.find(item => id === item.id);
  const otherState = state.filter(item => id !== item.id);
  report.status = 'reviewed';
  report.reviewer_comment = commentBody.reviewer_comment;
  return [...otherState, report];
};

const reportedArticles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPORTED_ARTICLE_SUCCESS:
      return { ...state, reportedArticle: action.reports };
    case actionTypes.GET_REPORTED_ARTICLE_FAILURE:
      return { ...state };
    case actionTypes.REVIEW_ARTICLE_SUCCESS: {
      const newState = updateState(
        action.reportid,
        action.commentBody,
        state.reportedArticle
      );
      return { ...state, reportedArticle: newState };
    }
    case actionTypes.REVIEW_ARTICLE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default reportedArticles;
