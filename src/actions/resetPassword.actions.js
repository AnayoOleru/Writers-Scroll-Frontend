import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import actionTypes from '../constants/resetPassword.constants';
import contentLoading from './loading.action';

export const resetPasswordSuccess = () => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = () => ({
  type: actionTypes.RESET_PASSWORD_FAILURE,
});

const redirect = () => {
  window.location = '/login';
};
export const resetPassword = (newPassword, token) => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      await http.patch(`/new-password?token=${token}`, newPassword, {
        headers: { Authorization: token },
      });
      toast.info('You have successfully reset your password.', {
        type: toast.TYPE.INFO,
        closeButton: true,
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        return redirect();
      }, 3000);
      return toast.info();
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(resetPasswordFailure());
    }
  };
};

export default {
  resetPassword,
};
