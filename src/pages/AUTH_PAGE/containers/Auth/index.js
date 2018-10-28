import { connect } from 'react-redux';
import {
  signIn,
} from '../../actions/';
import Auth from '../../components/Auth';

const mapDispatchToProps = {
  signIn,
};

export default connect(null, mapDispatchToProps)(Auth);