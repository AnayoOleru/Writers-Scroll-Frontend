import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  forgotPasswordSuccess,
  forgotPasswordFailure,
  forgotPassword,
} from '../../../../actions/forgotPassword.actions';
import loadingConstant from '../../../../constants/loading.constants';
import types from '../../../../constants/forgotPassword.constants';

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
        type: types.FORGOT_PASSWORD_SUCCESS,
      },
    ];
    const store = mockStore({});

    const dummyUser = {
      email: 'amaechi@yahoo.com',
    };

    store.dispatch(forgotPasswordSuccess(dummyUser));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for failure', async () => {
    const expectedAction = [
      {
        type: types.FORGOT_PASSWORD_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(forgotPasswordFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for a post request', async () => {
    fetchMock.mock('/api/v1/auth/reset', {
      method: 'POST',
    });
    await fetch('/api/v1/auth/reset', {
      method: 'POST',
    });
    const expectedAction = [
      {
        type: loadingConstant.CONTENT_LOADING,
      },
    ];

    const store = mockStore({});
    store.dispatch(forgotPassword());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
