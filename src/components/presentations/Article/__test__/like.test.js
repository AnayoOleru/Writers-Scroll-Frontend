import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  likeArticle,
  likeSuccess,
  likeFailure,
  likeCommentSuccess,
  likeCommentFailure,
  likeComment,
} from '../../../../actions/like.actions';
import types from '../../../../constants/article.constants';
import commentTypes from '../../../../constants/comment.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const id = 'fb3def47-153c-40bd-8161-a1c787e083d6';

const likeCount = 30;
const commentId = 1;
describe('single article actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: types.LIKE_SUCCESS,
        likeCount,
      },
    ];
    const store = mockStore({});

    store.dispatch(likeSuccess(likeCount));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: types.LIKE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(likeFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should test like success', async () => {
    fetchMock.mock(
      `/api/v1/likes/${id}`,
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

    await fetch(`/api/v1/likes/${id}`, {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: types.LIKE_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(likeArticle(likeCount));
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('like comment actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: commentTypes.LIKE_COMMENT_SUCCESS,
        commentId,
        likeCount,
      },
    ];
    const store = mockStore({});

    store.dispatch(likeCommentSuccess(commentId, likeCount));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to fetch profile success', async () => {
    const expectedAction = [
      {
        type: commentTypes.LIKE_COMMENT_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(likeCommentFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to like comment', async () => {
    fetchMock.mock(
      `/comments/${commentId}/likes`,
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

    await fetch(`/comments/${commentId}/likes`, {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
    });

    const expectedAction = [
      {
        type: commentTypes.LIKE_COMMENT_FAILURE,
      },
    ];

    const store = mockStore({});

    await store.dispatch(likeComment(commentId));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
