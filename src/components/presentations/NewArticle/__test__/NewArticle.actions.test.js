import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  postArticleSuccess,
  postArticleError,
} from '../../../../actions/article.actions';
import types from '../../../../constants/article.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('newArticle actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch article success', async () => {
    const expectedAction = [
      {
        type: types.POST_ARTICLES_SUCCESS,
        article: {
          title: 'Science',
          abstract: 'Science all through',
          body: 'Science all through, with the beak and chemicals',
          keywords: ['science', 'chemical'],
          category: 'science',
        },
      },
    ];
    const store = mockStore({});

    const dummyArticle = {
      title: 'Science',
      abstract: 'Science all through',
      body: 'Science all through, with the beak and chemicals',
      keywords: ['science', 'chemical'],
      category: 'science',
    };

    store.dispatch(postArticleSuccess(dummyArticle));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch article failure', async () => {
    const expectedAction = [
      {
        type: types.POST_ARTICLES_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(postArticleError());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for post article', async () => {
    fetchMock.mock(
      '/api/v1/article',
      {
        status: 200,
      },
      {
        method: 'POST',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/article', {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: 'POST_ARTICLES_FAILURE',
      },
    ];

    const store = mockStore({});

    store.dispatch(postArticleError());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
