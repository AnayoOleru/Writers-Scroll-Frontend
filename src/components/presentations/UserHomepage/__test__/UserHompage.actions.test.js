import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  getAllArticlesSuccess,
  getAllArticles,
  getAllArticlesError,
} from '../../../../actions/article.actions';
import types from '../../../../constants/article.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch article success', async () => {
    const expectedAction = [
      {
        type: types.FETCH_ARTICLES_SUCCESS,
        articles: { title: 'title', abstract: 'abstract' },
      },
    ];
    const store = mockStore({});

    const dummyArticle = {
      title: 'title',
      abstract: 'abstract',
    };

    await store.dispatch(getAllArticlesSuccess(dummyArticle));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for article failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_ARTICLES_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(getAllArticlesError());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for getting all articles', async () => {
    await fetchMock.mock(
      '/api/v1/articles',
      {
        status: 200,
      },
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: 'CONTENT_LOADING',
      },
      {
        type: types.FETCH_ARTICLES_SUCCESS,
      },
      {
        type: types.FETCH_ARTICLES_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(getAllArticles());
    expect(store.getActions()).toMatchObject(expectedAction);
  });
});
