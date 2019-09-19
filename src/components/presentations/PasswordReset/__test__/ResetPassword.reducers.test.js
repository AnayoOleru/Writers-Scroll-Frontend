import types from '../../../../constants/resetPassword.constants';
import resetPasswordReducer from '../../../../reducers/resetPassword.reducers';

describe('forgot password reducers', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual({});
  });

  it('should handle RESET_PASSWORD_SUCCESS', () => {
    expect(
      resetPasswordReducer([], {
        type: types.RESET_PASSWORD_SUCCESS,
      })
    ).toEqual({});
  });

  it('should handle RESET_PASSWORD_FAILURE', () => {
    expect(
      resetPasswordReducer([], {
        type: types.RESET_PASSWORD_FAILURE,
      })
    ).toEqual({});
  });
});
