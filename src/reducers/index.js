import { combineReducers } from 'redux';
import articles from './article.reducers';
import user from './profile.reducers';
import passwordReset from './forgotPassword.reducers';
import userResetPassword from './resetPassword.reducers';
import auth from './auth.reducer';
import userFollowee from './followee.reducers';
import userFollowing from './following.reducers';
import articlesUpdate from './articles-update.reducer';
import isLoadingReducer from './loading.reducer';
import bookmarkedArticles from './bookmarked.reducer';
import reportedArticles from './reported.reducers';
import userRequests from './reviewerRequests.reducer';
import singleArticle from './singleArticle.reducer';

const reducers = combineReducers({
  auth,
  user,
  articlesUpdate,
  userFollowee,
  userFollowing,
  articles,
  singleArticle,
  passwordReset,
  userResetPassword,
  isLoadingReducer,
  bookmarkedArticles,
  reportedArticles,
  userRequests,
});

export default reducers;
