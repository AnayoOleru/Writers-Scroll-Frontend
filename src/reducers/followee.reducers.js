import actionTypes from '../constants/followee.constants';

const initialState = {
  userFollowee: [],
  followedUser: '',
};

const userFollowee = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWEE_SUCCESS:
      return { ...state, userFollowee: action.followee };
    case actionTypes.FETCH_FOLLOWEE_FAILURE:
      return { ...state };
    case actionTypes.FOLLOW_SUCCESS: {
      return {
        ...state,
        followedUser: action.followedUser,
      };
    }
    case actionTypes.FOLLOW_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userFollowee;
