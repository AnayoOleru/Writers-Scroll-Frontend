import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  loginError,
  signup,
  confirmAccount,
} from '../../../../actions/auth.actions';
import loginConstant from '../../../../constants/loading.constants';
import types from '../../../../constants/auth.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });
  it('should create an action on failure', async () => {
    const expectedAction = [
      {
        type: types.LOGIN_FAILURE,
      },
    ];
    const store = mockStore({});
    await store.dispatch(loginError());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action on login request', async () => {
    await fetchMock.mock('/api/v1/auth/signup', {
      method: 'POST',
    });
    await fetch('/api/v1/auth/signup', {
      method: 'POST',
    });
    const expectedAction = [
      {
        type: loginConstant.CONTENT_LOADING,
      },
      {
        type: types.LOGIN_FAILURE,
      },
    ];

    const store = mockStore({});
    await store.dispatch(signup());
    expect(store.getActions()).toMatchObject(expectedAction);
  });

  it('should create an signup a user', async () => {
    await fetchMock.mock('/api/v1/auth/signup', {
      method: 'POST',
    });
    await fetch('/api/v1/auth/signup', {
      method: 'POST',
    });
    const expectedAction = [
      {
        type: loginConstant.CONTENT_LOADING,
      },
      {
        type: types.LOGIN_FAILURE,
      },
    ];

    const store = mockStore({});
    await store.dispatch(signup());
    expect(store.getActions()).toMatchObject(expectedAction);
  });

  it('should create an confirm users account', async () => {
    const token = 'fbefvuvfusbfhsvfhjsvhj43';
    await fetchMock.mock(`/api/v1/auth/verification/${token}`, {
      method: 'PATCH',
    });
    await fetch(`/api/v1/auth/verification/${token}`, {
      method: 'PATCH',
    });
    const expectedAction = [
      {
        type: loginConstant.CONTENT_LOADING,
      },
      {
        type: types.LOGIN_FAILURE,
      },
    ];

    const store = mockStore({});
    await store.dispatch(confirmAccount(token));
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});
