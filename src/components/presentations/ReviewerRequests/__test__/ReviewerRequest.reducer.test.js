import types from '../../../../constants/reviewerRequests.constant';
import reviewerRequestReducer from '../../../../reducers/reviewerRequests.reducer';

describe('reviewer request reducer', () => {
  it('should return the initial state', () => {
    expect(reviewerRequestReducer(undefined, {})).toEqual({
      userRequests: [],
      requestStatus: '',
    });
  });

  it('should handle REVIEWER_REQUESTS_SUCCESS', () => {
    expect(
      reviewerRequestReducer([], {
        type: types.REVIEWER_REQUESTS_SUCCESS,
        request: [{ userRequests: 'request' }],
      })
    ).toEqual({
      userRequests: [{ userRequests: 'request' }],
    });
  });

  it('should handle REVIEWER_REQUESTS_FAILURE', () => {
    expect(
      reviewerRequestReducer([], {
        type: types.REVIEWER_REQUESTS_FAILURE,
      })
    ).toEqual({});
  });
  it('should handle ACCEPT_REQUESTS_SUCCESS', () => {
    expect(
      reviewerRequestReducer([], {
        type: types.ACCEPT_REQUESTS_SUCCESS,
        userRequests: { userRequests: ['request'] },
      })
    ).toEqual([]);
  });
});
