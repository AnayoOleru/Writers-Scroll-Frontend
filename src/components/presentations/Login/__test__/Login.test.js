import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginError, login } from '../../../../actions/auth.actions';
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
    await fetchMock.mock('/api/v1/auth/login', {
      method: 'POST',
    });
    await fetch('/api/v1/auth/login', {
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
    await store.dispatch(login());
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});
