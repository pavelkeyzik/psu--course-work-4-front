import { connect } from 'react-redux';
import { RecentActivity } from '../../components';
import { gerRecentActivity } from '../../actions/recent-activity';

const mapStateToProps = state => ({
  data: state.home.data.activity,
});

const mapDispatchToProps = {
  gerRecentActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity);
