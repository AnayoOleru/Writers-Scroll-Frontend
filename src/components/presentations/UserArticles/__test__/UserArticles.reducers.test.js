import types from '../../../../constants/my-articles.constants';
import myArticleReducer from '../../../../reducers/articles-update.reducer';

describe('my article reducers', () => {
  it('should return the initial state', () => {
    expect(myArticleReducer(undefined, {})).toEqual({
      fetching: false,
      fetched: false,
      articles: [],
      error: null,
    });
  });

  it('should handle DELETE_ARTICLES_SUCCESS', () => {
    const state = {
      articles: [{ id: 'jest' }, { id: 'jests' }],
    };

    const newState = myArticleReducer(state, {
      type: types.DELETE_ARTICLES_SUCCESS,
      articles: [{ id: 'jest' }],
    });

    expect(newState).toEqual({
      articles: [{ id: 'jest' }, { id: 'jests' }],
    });
  });

  it('should handle DELETE_ARTICLES_FAILURE', () => {
    expect(
      myArticleReducer([], {
        type: types.DELETE_ARTICLES_FAILURE,
      })
    ).toEqual({});
  });
});
