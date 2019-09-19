/* eslint-disable no-param-reassign */
import actionTypes from '../constants/article.constants';
import commentTypes from '../constants/comment.constants';

const initialState = {
  article: [],
  comments: [],
  error: false,
  commentHistory: [],
};

export const updateArticleLikes = (article, likeCount) => {
  const newArticle = { ...article };
  newArticle.likes_count = likeCount;
  return newArticle;
};
export const updateComment = (state, updatedComment) => {
  state.map(item => {
    if (item.id === updatedComment.id) {
      item.body = updatedComment.body;
      item.updatedAt = updatedComment.updatedAt;
    }
    return item;
  });
  return state;
};

export const updateCommentLikes = (comments, commentId, likeCount) => {
  comments.map(comment => {
    if (comment.id === commentId) {
      comment.likes_count = likeCount;
    }
    return comment;
  });
  return comments;
};

const singleArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.article,
        comments: action.article.Comments,
      };
    case actionTypes.FETCH_SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
        error: true,
      };
    case commentTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: (state.comments || []).concat([action.comment]),
      };
    case actionTypes.POST_COMMENT_FAILURE:
      return {
        ...state,
      };
    case commentTypes.EDIT_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: updateComment(state.comments, action.editResponse),
      };
    }
    case commentTypes.FETCH_COMMENT_HISTORY_SUCCESS:
      return {
        ...state,
        commentHistory: action.histories,
      };
    case actionTypes.RESET_FAILING_ARTICLE:
      return {
        ...state,
        error: false,
      };
    case actionTypes.LIKE_SUCCESS:
      return {
        ...state,
        article: updateArticleLikes(state.article, action.likeCount),
      };
    case actionTypes.LIKE_FAILURE:
      return {
        ...state,
      };
    case commentTypes.LIKE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: updateCommentLikes(
          state.comments,
          action.commentId,
          action.likeCount
        ),
      };
    case commentTypes.LIKE_COMMENT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default singleArticle;
