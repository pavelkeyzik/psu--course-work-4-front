import { connect } from 'react-redux';
import {
  signUp,
} from '../../actions/';
import Reg from '../../components/Reg';

const mapStateToProps = (state) => ({
  user: state.user.data,
});

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reg);