import exceptionHandler from '../utils/exceptionHandler';
import actionTypes from '../constants/article.constants';
import commentType from '../constants/comment.constants';
import http from '../utils/httpService';

export const likeSuccess = likeCount => ({
  type: actionTypes.LIKE_SUCCESS,
  likeCount,
});

export const likeFailure = () => ({
  type: actionTypes.LIKE_FAILURE,
});

export const likeCommentSuccess = (commentId, likeCount) => ({
  type: commentType.LIKE_COMMENT_SUCCESS,
  commentId,
  likeCount,
});

export const likeCommentFailure = () => ({
  type: commentType.LIKE_COMMENT_FAILURE,
});

export const likeArticle = articleId => {
  return async dispatch => {
    try {
      const { data: result } = await http.post(`/likes/${articleId}`);
      const { data } = result;
      const likeCount = parseInt(data.likes_count, 10);
      dispatch(likeSuccess(likeCount));
    } catch (ex) {
      dispatch(likeFailure());
      exceptionHandler(ex);
    }
  };
};

export const likeComment = commentId => {
  return async dispatch => {
    try {
      const { data: result } = await http.post(`/comments/${commentId}/likes`);
      const { data } = result;
      const likeCount = parseInt(data.likes_count, 10);
      dispatch(likeCommentSuccess(commentId, likeCount));
    } catch (ex) {
      dispatch(likeCommentFailure());
      exceptionHandler(ex);
    }
  };
};
