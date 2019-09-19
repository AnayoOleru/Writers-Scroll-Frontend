import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import adminAction, {
  AcceptRequestFailure,
  RejectRequestFailure,
} from '../../../../actions/admin.actions';
import reviewerReducers from '../../../../reducers/reviewerRequests.reducer';
import actions from '../../../../constants/reviewerRequests.constant';

const { acceptRequest, rejectRequest } = adminAction;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userId = 'bfcf9886-d303-432d-b8e5-fea9beca21cf';

describe('get reported article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should return the initial state', () => {
    expect(reviewerReducers(undefined, {})).toEqual({
      userRequests: [],
      requestStatus: '',
    });
  });

  it('should handle REJECT_REQUEST_SUCCESS', () => {
    const state1 = {
      userRequests: [{ id: 'abc' }, { userId: 'jkl' }],
    };

    const newState2 = reviewerReducers(state1, {
      type: actions.REJECT_REQUEST_SUCCESS,
    });

    expect(newState2).toEqual({
      userRequests: [],
    });
  });

  it('should create an action for reviewer request failure', async () => {
    const expectedAction = [
      {
        type: actions.ACCEPT_REQUEST_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(AcceptRequestFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for reject request failure', async () => {
    const expectedAction = [
      {
        type: actions.REJECT_REQUEST_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(RejectRequestFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for accepting request', async () => {
    await fetchMock.mock(
      `/api/v1/admin${userId}/upgrades`,
      {
        status: 200,
      },
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'faketoken',
        },
      }
    );

    await fetch(`/api/v1/admin${userId}/upgrades`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'faketoken',
      },
    });

    const expectedAction = [
      {
        type: 'CONTENT_LOADING',
      },
      {
        type: actions.ACCEPT_REQUEST_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(acceptRequest());
    expect(store.getActions()).toMatchObject(expectedAction);
  });

  it('should create an action for rejecting request', async () => {
    await fetchMock.mock(
      `/api/v1/admin${userId}/reject`,
      {
        status: 200,
      },
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'faketoken',
        },
      }
    );

    await fetch(`/api/v1/admin${userId}/reject`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'faketoken',
      },
    });

    const expectedAction = [
      {
        type: 'CONTENT_LOADING',
      },
      {
        type: actions.REJECT_REQUEST_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(rejectRequest());
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});
