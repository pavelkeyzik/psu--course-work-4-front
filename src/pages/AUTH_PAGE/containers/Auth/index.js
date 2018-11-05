import { connect } from 'react-redux';
import {
  signIn,
} from '../../actions/';
import Auth from '../../components/Auth';

const mapStateToProps = (state) => ({
  user: state.user.data,
});

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);