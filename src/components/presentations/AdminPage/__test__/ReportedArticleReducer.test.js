import types from '../../../../constants/reported.contants';
import reportReducer from '../../../../reducers/reported.reducers';

describe('report reducers', () => {
  it('should return the initial state', () => {
    expect(reportReducer(undefined, {})).toEqual({
      reportedArticle: [],
    });
  });

  it('should handle GET_REPORTED_ARTICLE', () => {
    expect(
      reportReducer([], {
        type: types.GET_REPORTED_ARTICLE_SUCCESS,
        reports: [{ user: 'jest' }],
      })
    ).toEqual({
      reportedArticle: [{ user: 'jest' }],
    });
  });

  it('should handle GET_REPORTED_FAILURE', () => {
    expect(
      reportReducer([], {
        type: types.GET_REPORTED_ARTICLE_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle REVIEW_FAILURE', () => {
    expect(
      reportReducer([], {
        type: types.REVIEW_ARTICLE_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle REVIEW_SUCCESS', () => {
    const state = {
      reportedArticle: [
        { id: 'abc', reviewer_comment: 'jkl', status: 'pending' },
      ],
    };

    expect(
      reportReducer(state, {
        type: types.REVIEW_ARTICLE_SUCCESS,
        reportid: 'abc',
        commentBody: { reviewer_comment: 'new comment' },
      })
    ).toEqual({
      reportedArticle: [
        { id: 'abc', reviewer_comment: 'new comment', status: 'reviewed' },
      ],
    });
  });
});
