import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reviewerRequestAction, {
  getReviewerRequestsSuccess,
  getRevieweRequestsFailure,
} from '../../../../actions/reviewers-request.action';
import types from '../../../../constants/reviewerRequests.constant';

const { getUserRequests } = reviewerRequestAction;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get reviewer request actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action get reviewer request success', async () => {
    const expectedAction = [
      {
        type: types.REVIEWER_REQUESTS_SUCCESS,
        request: { title: 'title', abstract: 'abstract' },
      },
    ];
    const store = mockStore({});

    const request = {
      title: 'title',
      abstract: 'abstract',
    };

    await store.dispatch(getReviewerRequestsSuccess(request));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get reviewer request failure', async () => {
    const expectedAction = [
      {
        type: types.REVIEWER_REQUESTS_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(getRevieweRequestsFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for getting all reviewer request ', async () => {
    await fetchMock.mock(
      '/api/v1/admin/reviewer',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'faketoken',
        },
      }
    );

    await fetch('/api/v1/admin/reviewer', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'faketoken',
      },
    });

    const expectedAction = [
      {
        type: types.REVIEWER_REQUESTS_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(getUserRequests());
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});
