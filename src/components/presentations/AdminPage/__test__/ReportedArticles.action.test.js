import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import reportedArticleAction, {
  getReportedArticleSuccess,
  getReportedArticleFailure,
} from '../../../../actions/reported.actions';
import types from '../../../../constants/reported.contants';
import contentLoading from '../../../../constants/loading.constants';

const { getReportedArticle, requestReview } = reportedArticleAction;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get reported article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action get reported articles success', async () => {
    const expectedAction = [
      {
        type: types.GET_REPORTED_ARTICLE_SUCCESS,
        reports: { title: 'title', status: 'pending' },
      },
    ];
    const store = mockStore({});

    const reports = {
      title: 'title',
      status: 'pending',
    };

    await store.dispatch(getReportedArticleSuccess(reports));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get reported article failure', async () => {
    const expectedAction = [
      {
        type: types.GET_REPORTED_ARTICLE_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(getReportedArticleFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for getting all reported articles', async () => {
    await fetchMock.mock(
      '/api/v1/reported-articles',
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

    await fetch('/api/v1/reported-articles', {
      method: 'GET',
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
        type: types.GET_REPORTED_ARTICLE_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(getReportedArticle());
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});

describe('get reported article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action on request for reviewer', async () => {
    fetchMock.mock(
      '/api/v1/request',
      {
        status: 200,
      },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'faketoken',
        },
      }
    );

    await fetch('/api/v1/request', {
      method: 'POST',
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
        type: contentLoading.CONTENT_LOADING_STOP,
      },
    ];

    const store = mockStore({});

    await store.dispatch(requestReview());
    await expect(store.getActions()).toMatchObject(expectedAction);
  });
});
