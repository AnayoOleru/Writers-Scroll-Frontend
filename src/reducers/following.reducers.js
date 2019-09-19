import actionTypes from '../constants/follow.constants';
import filter from '../utils/filterFollowing';

const initialState = {
  userFollowing: [],
  unFollowedUser: '',
  followingCount: 0,
};

const userFollowing = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWING_SUCCESS:
      return {
        ...state,
        userFollowing: action.following,
        followingCount: action.following.length,
      };
    case actionTypes.FETCH_FOLLOWING_FAILURE:
      return { ...state };
    case actionTypes.UNFOLLOW_SUCCESS: {
      const newFollowing = filter(
        state.userFollowing,
        action.unFollowedUser.user.id
      );
      return {
        ...state,
        userFollowing: newFollowing,
        unFollowedUser: action.unFollowedUser,
      };
    }
    case actionTypes.UNFOLLOW_FAILURE:
      return { ...state };
    case actionTypes.INCREASE_COUNT:
      return { ...state, followingCount: action.newCount };
    case actionTypes.DECREASE_COUNT:
      return { ...state, followingCount: action.newCount };
    default:
      return state;
  }
};

export default userFollowing;
