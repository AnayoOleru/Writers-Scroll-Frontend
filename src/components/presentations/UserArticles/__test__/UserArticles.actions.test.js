import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions, {
  deleteArticlesSuccess,
  deleteArticlesFailure,
} from '../../../../actions/articles-update.actions';
import types from '../../../../constants/my-articles.constants';

const articleId = 'bfcf9886-d303-432d-b8e5-fea9beca21cf';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for succesfully deleting an article', async () => {
    const expectedAction = [
      {
        type: types.DELETE_ARTICLES_SUCCESS,
      },
    ];
    const store = mockStore({});

    await store.dispatch(deleteArticlesSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for a delete request failure', async () => {
    const expectedAction = [
      {
        type: types.DELETE_ARTICLES_FAILURE,
      },
    ];
    const store = mockStore({});

    await store.dispatch(deleteArticlesFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for deleting an article', async () => {
    fetchMock.mock(
      `/article/${articleId}`,
      {
        status: 200,
      },
      {
        method: 'DELETE',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch(`/article/${articleId}`, {
      method: 'DELETE',
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
        type: types.DELETE_ARTICLES_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(actions.deleteArticle(articleId));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
