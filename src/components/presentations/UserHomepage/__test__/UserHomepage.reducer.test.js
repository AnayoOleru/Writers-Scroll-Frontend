import types from '../../../../constants/article.constants';
import articleReducer from '../../../../reducers/article.reducers';

describe('article reducers', () => {
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual({
      articleData: [],
    });
  });

  it('should handle FETCH_ARTICLES_SUCCESS', () => {
    expect(
      articleReducer([], {
        type: types.FETCH_ARTICLES_SUCCESS,
        articles: [{ articleData: 'article' }],
      })
    ).toEqual({
      articleData: [{ articleData: 'article' }],
    });
  });

  it('should handle FETCH_ARTICLES_FAILURE', () => {
    expect(
      articleReducer([], {
        type: types.FETCH_ARTICLES_FAILURE,
      })
    ).toEqual({});
  });
});
