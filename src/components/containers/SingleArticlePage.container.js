import { connect } from 'react-redux';
import ArticlePage from '../presentations/Article/ArticlePage';
import { getSingleArticle, reset } from '../../actions/singleArticle.actions';
import { rateArticle } from '../../actions/article.actions';
import {
  postComment,
  updateComment,
  getCommentHistory,
} from '../../actions/comment.actions';
import reportedArticleAction from '../../actions/reported.actions';
import { likeArticle, likeComment } from '../../actions/like.actions';

const { reportArticle } = reportedArticleAction;

const mapStateToProps = ({ singleArticle, isLoadingReducer, user }) => ({
  singleArticle,
  isLoadingReducer,
  user,
});

const SingleArticlePageContainer = connect(
  mapStateToProps,
  {
    getSingleArticle,
    rateArticle,
    postComment,
    reportArticle,
    reset,
    likeArticle,
    updateComment,
    getCommentHistory,
    likeComment,
  }
)(ArticlePage);

export default SingleArticlePageContainer;
