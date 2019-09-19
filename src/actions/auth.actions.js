import { toast } from 'react-toastify';
import exceptionHandler from '../utils/exceptionHandler';
import http from '../utils/httpService';
import { setToken, removeToken } from '../utils/authService';
import actionTypes from '../constants/auth.constants';
import contentLoading from './loading.action';

export const loginError = () => ({
  type: actionTypes.LOGIN_FAILURE,
});

const redirect = redirectUrl => {
  window.location = redirectUrl;
};

export const login = (userObj, props) => {
  return async dispatch => {
    if (!navigator.onLine) {
      return toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`/auth/login`, userObj);
      const { user } = data;
      const { token } = user;
      setToken(token);
      const { location } = props;
      const { state } = location;
      const path = state ? state.from.pathname : '/';
      return redirect(path);
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export const signup = userObj => {
  return async dispatch => {
    if (!navigator.onLine) {
      return toast.error('Please check your internet connection');
    }
    dispatch(contentLoading());
    try {
      const { data } = await http.post(`/auth/signup`, userObj);
      const { user } = data;
      const { token } = user;
      setToken(token);
      return redirect('/');
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export const confirmAccount = token => {
  return async dispatch => {
    dispatch(contentLoading());
    try {
      const { data } = await http.patch(`/auth/verification/${token}`);
      const { message } = data;
      return message;
    } catch (ex) {
      return exceptionHandler(ex);
    } finally {
      dispatch(loginError());
    }
  };
};

export const logout = () => {
  removeToken();
  window.location = '/login';
};

export const socialLogin = () => {
  const socialLoginToken = window.location.href.split('?')[1].split('#')[0];
  if (socialLoginToken) {
    setToken(socialLoginToken);
    window.location = '/';
  }
};

export default {
  login,
  signup,
  confirmAccount,
  logout,
  socialLogin,
};
