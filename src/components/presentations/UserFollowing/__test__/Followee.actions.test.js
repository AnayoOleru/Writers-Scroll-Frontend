import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  getFolloweeSuccess,
  getFolloweeFailure,
  followSuccess,
  followFailure,
} from '../../../../actions/followee.actions';
import types from '../../../../constants/followee.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch followee success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_FOLLOWEE_SUCCESS,
        followee: { firstname: 'sam', lastname: 'peter', bio: '' },
      },
    ];
    const store = mockStore({});

    const dummyFollowee = {
      firstname: 'sam',
      lastname: 'peter',
      bio: '',
    };

    store.dispatch(getFolloweeSuccess(dummyFollowee));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch followee failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_FOLLOWEE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(getFolloweeFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch follow success', async () => {
    const expectedAction = [
      {
        type: types.FOLLOW_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(followSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch follow failure', async () => {
    const expectedAction = [
      {
        type: types.FOLLOW_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(followFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
