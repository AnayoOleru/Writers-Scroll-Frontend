import { toast } from 'react-toastify';
import actions from '../constants/reported.contants';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import stopLoading from './stopLoading.action';
import exceptionHandler from '../utils/exceptionHandler';

export const getReportedArticleSuccess = reports => {
  return {
    type: actions.GET_REPORTED_ARTICLE_SUCCESS,
    reports,
  };
};

export const getReportedArticleFailure = () => {
  return {
    type: actions.GET_REPORTED_ARTICLE_FAILURE,
  };
};

export const reviewArticleSuccess = (reportid, commentBody) => {
  return {
    type: actions.REVIEW_ARTICLE_SUCCESS,
    reportid,
    commentBody,
  };
};

export const reviewArticleFailure = () => {
  return {
    type: actions.REVIEW_ARTICLE_FAILURE,
  };
};

const getReportedArticle = () => {
  return async dispatch => {
    if (!navigator.onLine) {
      toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      const { data } = await http.get(`/reported-articles`);
      dispatch(getReportedArticleSuccess(data.reportedArticles));
    } catch (error) {
      dispatch(getReportedArticleFailure());
    }
  };
};

const requestReview = () => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`/request`);
      toast.info(data.message, {
        type: toast.TYPE.INFO,
        closeButton: false,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(stopLoading());
    } catch (error) {
      exceptionHandler(error);
      dispatch(stopLoading());
    }
  };
};

const reportArticle = (articleid, body) => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`/article/report/${articleid}`, body);
      toast.info(data.message, {
        type: toast.TYPE.INFO,
        closeButton: true,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(stopLoading());
    } catch (error) {
      dispatch(stopLoading());
      exceptionHandler(error);
    }
  };
};

const reviewArticle = (articleid, commentBody, reportid) => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.patch(
        `/article/review/${articleid}`,
        commentBody
      );

      toast.info(data.message, {
        type: toast.TYPE.INFO,
        closeButton: true,
        position: toast.POSITION.TOP_CENTER,
      });

      dispatch(reviewArticleSuccess(reportid, commentBody));
    } catch (error) {
      dispatch(reviewArticleFailure());
      exceptionHandler(error);
    }
  };
};

const changeReportStatus = (articleid, commentBody) => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.patch(
        `/article/status/${articleid}`,
        commentBody
      );

      toast.info(data.message, {
        type: toast.TYPE.INFO,
        closeButton: true,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(stopLoading());
    } catch (error) {
      dispatch(stopLoading());
      exceptionHandler(error);
    }
  };
};

const reportedArticleAction = {
  getReportedArticle,
  requestReview,
  reportArticle,
  reviewArticle,
  changeReportStatus,
};

export default reportedArticleAction;
