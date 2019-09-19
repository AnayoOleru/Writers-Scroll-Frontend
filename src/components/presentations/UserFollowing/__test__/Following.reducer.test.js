import types from '../../../../constants/follow.constants';
import followingReducer from '../../../../reducers/following.reducers';

describe('following reducers', () => {
  it('should return the initial state', () => {
    expect(followingReducer(undefined, {})).toEqual({
      userFollowing: [],
      unFollowedUser: '',
      followingCount: 0,
    });
  });

  it('should handle FETCH_FOLLOWING_SUCCESS', () => {
    expect(
      followingReducer([], {
        type: types.FETCH_FOLLOWING_SUCCESS,
        following: [{ userFollowing: 'following' }],
      })
    ).toEqual({
      userFollowing: [{ userFollowing: 'following' }],
      followingCount: 1,
    });
  });

  it('should handle FETCH_FOLLOWING_FAILURE', () => {
    expect(
      followingReducer([], {
        type: types.FETCH_FOLLOWING_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle UNFOLLOW_SUCCESS', () => {
    const state = {
      userFollowing: [{ id: 'abc', followee_id: 'jkl' }, { id: 'jkl' }],
      unFollowedUser: '',
    };

    const newState = followingReducer(state, {
      type: types.UNFOLLOW_SUCCESS,
      unFollowedUser: {
        user: {
          id: 'jkl',
        },
      },
    });

    expect(newState).toEqual({
      userFollowing: [{ id: 'jkl' }],
      unFollowedUser: { user: { id: 'jkl' } },
    });
  });

  it('should handle UNFOLLOW_FAILURE', () => {
    expect(
      followingReducer([], {
        type: types.UNFOLLOW_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle COUNT_INCREMENT', () => {
    expect(
      followingReducer([], {
        type: types.INCREASE_COUNT,
        newCount: '2',
      })
    ).toEqual({
      followingCount: '2',
    });
  });

  it('should handle DECREASE_COUNT', () => {
    expect(
      followingReducer([], {
        type: types.DECREASE_COUNT,
        newCount: '1',
      })
    ).toEqual({
      followingCount: '1',
    });
  });
});
