import { connect } from 'react-redux';
import App from '../../components/App';
import {
  initApplication,
} from '../../actions/app';

const mapStateToProps = (state) => ({
  app: state.app,
  user: state.user,
});

const mapDispatchToProps = {
  initApplication: initApplication,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);