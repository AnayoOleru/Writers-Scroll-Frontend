import actionTypes from '../constants/profile.constants';

const initialState = {
  userProfile: {},
  suggestedResearchers: [],
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, userProfile: action.profile };
    case actionTypes.FETCH_PROFILE_FAILURE:
      return { ...state };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, userProfile: action.profile };
    case actionTypes.UPDATE_PROFILE_FAILURE:
      return { ...state };
    case actionTypes.FETCH_SUGGESTED_RESEARCHERS_SUCCESS:
      return { ...state, suggestedResearchers: action.researchers };
    case actionTypes.FETCH_SUGGESTED_RESEARCHERS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default userProfile;
