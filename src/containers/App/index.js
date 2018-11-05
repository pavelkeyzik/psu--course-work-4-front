import { connect } from 'react-redux';
import { App } from '../../components';
import {
  initApplication,
} from '../../actions/app';
import {
  logout,
} from '../../pages/AUTH_PAGE/actions';

const mapStateToProps = (state) => ({
  app: state.app,
  user: state.user,
});

const mapDispatchToProps = {
  initApplication,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);