import types from '../../../../constants/article.constants';
import newArticleReducer from '../../../../reducers/article.reducers';

describe('newArticle reducers', () => {
  it('should return the initial state', () => {
    expect(newArticleReducer(undefined, {})).toEqual({
      articleData: [],
    });
  });

  it('should handle POST_ARTICLES_SUCCESS', () => {
    expect(
      newArticleReducer(
        {},
        {
          type: types.POST_ARTICLES_SUCCESS,
        }
      )
    ).toEqual({ success: true });
  });

  it('should handle POST_ARTICLES_FAILURE', () => {
    expect(
      newArticleReducer(
        {},
        {
          type: types.POST_ARTICLES_FAILURE,
          success: false,
        }
      )
    ).toEqual({});
  });
});
