import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  getProfileFailure,
  getProfileSuccess,
  updateProfileFailure,
  updateProfileSuccess,
  fetchSuggestedResearchersFailure,
  fetchSuggestedResearchersSuccess,
} from '../../../../actions/profile.action';
import types from '../../../../constants/profile.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PROFILE_SUCCESS,
        profile: { firstname: 'sam', lastname: 'peter' },
      },
    ];
    const store = mockStore({});

    const dummyProfile = {
      firstname: 'sam',
      lastname: 'peter',
    };

    store.dispatch(getProfileSuccess(dummyProfile));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch profile failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_PROFILE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(getProfileFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get profile', async () => {
    fetchMock.mock(
      '/api/v1/profile/12345',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/profile/12345', {
      method: 'GET',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: 'CONTENT_LOADING',
      },
      {
        type: 'FETCH_PROFILE_FAILURE',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.getProfile());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to patch profile success', async () => {
    const expectedAction = [
      {
        type: 'UPDATE_PROFILE_SUCCESS',
        profile: { firstname: 'sam', lastname: 'peter' },
      },
    ];
    const store = mockStore({});

    const dummyProfile = {
      firstname: 'sam',
      lastname: 'peter',
    };

    store.dispatch(updateProfileSuccess(dummyProfile));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to update profile failure', async () => {
    const expectedAction = [
      {
        type: types.UPDATE_PROFILE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(updateProfileFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for pacth profile', async () => {
    fetchMock.mock(
      '/api/v1/profile/12345',
      {
        status: 200,
      },
      {
        method: 'PATCH',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/profile/12345', {
      method: 'PATCH',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: 'CONTENT_LOADING',
      },
      {
        type: 'UPDATE_PROFILE_FAILURE',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.updateProfile());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch suggested researchers', async () => {
    const expectedAction = [
      {
        type: types.FETCH_SUGGESTED_RESEARCHERS_SUCCESS,
        researchers: { firstname: 'sam', lastname: 'peter' },
      },
    ];
    const store = mockStore({});

    const dummyProfile = {
      firstname: 'sam',
      lastname: 'peter',
    };

    store.dispatch(fetchSuggestedResearchersSuccess(dummyProfile));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch suggested researchers failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_SUGGESTED_RESEARCHERS_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(fetchSuggestedResearchersFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
