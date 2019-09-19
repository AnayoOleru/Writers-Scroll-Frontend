import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  resetPasswordSuccess,
  resetPasswordFailure,
  resetPassword,
} from '../../../../actions/resetPassword.actions';
import loadingConstant from '../../../../constants/loading.constants';
import types from '../../../../constants/resetPassword.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for success', async () => {
    const expectedAction = [
      {
        type: types.RESET_PASSWORD_SUCCESS,
      },
    ];
    const store = mockStore({});

    const dummyUser = {
      password: '1123@chuks',
      confirmPassword: '1123@chuks',
    };

    store.dispatch(resetPasswordSuccess(dummyUser));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for failure', async () => {
    const expectedAction = [
      {
        type: types.RESET_PASSWORD_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(resetPasswordFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for a post request', async () => {
    fetchMock.mock(
      '/api/v1/auth/new-password',
      {
        status: 201,
      },
      {
        method: 'POST',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/auth/new-password', {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });
    const expectedAction = [
      {
        type: loadingConstant.CONTENT_LOADING,
      },
    ];

    const store = mockStore({});
    store.dispatch(resetPassword());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
