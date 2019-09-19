import types from '../../../../constants/forgotPassword.constants';
import forgotPasswordReducer from '../../../../reducers/forgotPassword.reducers';

describe('forgot password reducers', () => {
  it('should return the initial state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual({});
  });

  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    expect(
      forgotPasswordReducer([], {
        type: types.FORGOT_PASSWORD_SUCCESS,
      })
    ).toEqual({});
  });

  it('should handle FORGOT_PASSWORD_FAILURE', () => {
    expect(
      forgotPasswordReducer([], {
        type: types.FORGOT_PASSWORD_FAILURE,
      })
    ).toEqual({});
  });
});
