import actionTypes from '../constants/reviewerRequests.constant';
import filter from '../utils/filterRequest';
import filters from '../utils/filterReject';

const initialState = {
  userRequests: [],
  requestStatus: '',
};

const userRequests = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REVIEWER_REQUESTS_SUCCESS:
      return { ...state, userRequests: action.request };
    case actionTypes.REVIEWER_REQUESTS_FAILURE:
      return { ...state };
    case actionTypes.ACCEPT_REQUEST_SUCCESS: {
      const newRequest = filter(state.userRequests, action.requests.user.id);
      return {
        ...state,
        userRequests: newRequest,
        requestStatus: action.requests,
      };
    }

    case actionTypes.ACCEPT_REQUEST_FAILURE:
      return {
        ...state,
      };
    case actionTypes.REJECT_REQUEST_SUCCESS: {
      const newUserRequest = filters(state.userRequests, action.userId);
      return {
        ...state,
        userRequests: newUserRequest,
      };
    }

    case actionTypes.REJECT_REQUEST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userRequests;
