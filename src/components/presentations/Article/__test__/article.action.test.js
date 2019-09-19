import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getSingleArticle } from '../../../../actions/singleArticle.actions';
import {
  postComment,
  updateComment,
  getCommentHistory,
} from '../../../../actions/comment.actions';
import types from '../../../../constants/article.constants';
import commentTypes from '../../../../constants/comment.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('single article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for getting single article', async () => {
    await fetchMock.mock(
      '/api/v1/article/1',
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

    await fetch('/api/v1/article/1', {
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
        type: types.FETCH_SINGLE_ARTICLE_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(getSingleArticle());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for posting comment', async () => {
    await fetchMock.mock(
      '/api/v1/comments',
      {
        status: 200,
      },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: commentTypes.POST_COMMENT_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(postComment());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for updating comment', async () => {
    await fetchMock.mock(
      '/api/v1/comments/1',
      {
        status: 200,
      },
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    await fetch('/api/v1/comments/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: commentTypes.EDIT_COMMENT_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(updateComment());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for getting comment history', async () => {
    await fetchMock.mock(
      '/api/v1/comments/1/histories',
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

    await fetch('/api/v1/comments/1/histories', {
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
        type: commentTypes.FETCH_COMMENT_HISTORY_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(getCommentHistory());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
