import { toast } from 'react-toastify';
import actions from '../constants/follow.constants';
import http from '../utils/httpService';
import exceptionHandler from '../utils/exceptionHandler';

export const getFollowingSuccess = following => {
  return {
    type: actions.FETCH_FOLLOWING_SUCCESS,
    following,
  };
};

export const getFollowingFailure = () => {
  return {
    type: actions.FETCH_FOLLOWING_FAILURE,
  };
};

export const unFollowSuccess = unFollowedUser => {
  return {
    type: actions.UNFOLLOW_SUCCESS,
    unFollowedUser,
  };
};

export const unFollowFailure = () => {
  return {
    type: actions.UNFOLLOW_FAILURE,
  };
};

export const countUpdate = newCount => {
  return {
    type: actions.DECREASE_COUNT,
    newCount,
  };
};

const getFollowing = () => {
  return async dispatch => {
    try {
      const following = await http.get(`/following`);
      return dispatch(getFollowingSuccess(following.data.following));
    } catch (error) {
      return exceptionHandler(error);
    } finally {
      dispatch(getFollowingFailure());
    }
  };
};

const unFollowUser = (userId, newCount) => {
  return async dispatch => {
    try {
      const unFollow = await http.delete(`follow/${userId}`);
      dispatch(unFollowSuccess(unFollow.data));
      dispatch(countUpdate(newCount));
      toast.success(`You unfollowed ${unFollow.data.user.last_name}`);
    } catch (error) {
      dispatch(unFollowFailure());
      exceptionHandler(error);
    }
  };
};

const followingAction = {
  getFollowing,
  unFollowUser,
};

export default followingAction;
