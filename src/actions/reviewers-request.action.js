import actions from '../constants/reviewerRequests.constant';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

export const getReviewerRequestsSuccess = request => {
  return {
    type: actions.REVIEWER_REQUESTS_SUCCESS,
    request,
  };
};

export const getRevieweRequestsFailure = () => {
  return {
    type: actions.REVIEWER_REQUESTS_FAILURE,
  };
};

const getUserRequests = () => {
  return async dispatch => {
    try {
      const { data } = await http.get(`/admin/reviewer`);
      return dispatch(getReviewerRequestsSuccess(data.allUsersRequest));
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(getRevieweRequestsFailure());
    }
  };
};

const RequestAction = {
  getUserRequests,
};

export default RequestAction;
