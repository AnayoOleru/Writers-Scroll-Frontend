import { connect } from 'react-redux';
import RequestAction from '../../actions/reviewers-request.action';
import AdminPage from '../presentations/AdminPage/AdminPage';
import reportedArticleAction from '../../actions/reported.actions';
import adminAction from '../../actions/admin.actions';

const {
  getReportedArticle,
  reviewArticle,
  changeReportStatus,
} = reportedArticleAction;
const { getUserRequests } = RequestAction;
const { acceptRequest, rejectRequest } = adminAction;
const mapStateToProps = ({ userRequests, reportedArticles }) => ({
  userRequests,
  reportedArticle: reportedArticles.reportedArticle,
});

const AdminpageContainer = connect(
  mapStateToProps,
  {
    getUserRequests,
    getReportedArticle,
    acceptRequest,
    rejectRequest,
    reviewArticle,
    changeReportStatus,
  }
)(AdminPage);

export default AdminpageContainer;
