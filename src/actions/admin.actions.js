import { toast } from 'react-toastify';
import actions from '../constants/reviewerRequests.constant';
import http from '../utils/httpService';
import contentLoading from './loading.action';
import exceptionHandler from '../utils/exceptionHandler';

export const AcceptRequestSuccess = requests => {
  return {
    type: actions.ACCEPT_REQUEST_SUCCESS,
    requests,
  };
};

export const AcceptRequestFailure = () => {
  return {
    type: actions.ACCEPT_REQUEST_FAILURE,
  };
};

export const RejectRequestSuccess = userId => {
  return {
    type: actions.REJECT_REQUEST_SUCCESS,
    userId,
  };
};

export const RejectRequestFailure = () => {
  return {
    type: actions.REJECT_REQUEST_FAILURE,
  };
};

const acceptRequest = userId => {
  return async dispatch => {
    if (!navigator.onLine) {
      toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      const requestByUser = await http.patch(`admin/${userId}/upgrades`);
      dispatch(AcceptRequestSuccess(requestByUser.data));
      toast.success(
        `You have activated ${
          requestByUser.data.user.last_name
        } to be a reviewer`,
        {
          type: toast.TYPE.INFO,
          closeButton: true,
          position: toast.POSITION.TOP_CENTER,
        }
      );
    } catch (error) {
      dispatch(AcceptRequestFailure());
      exceptionHandler(error);
    }
  };
};

const rejectRequest = userId => {
  return async dispatch => {
    if (!navigator.onLine) {
      toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      await http.delete(`admin/${userId}/reject`);
      dispatch(RejectRequestSuccess(userId));
      toast.success('Request successfully rejected', {
        type: toast.TYPE.INFO,
        closeButton: true,
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      dispatch(RejectRequestFailure());
      exceptionHandler(error);
    }
  };
};

const adminAction = {
  acceptRequest,
  rejectRequest,
};

export default adminAction;
