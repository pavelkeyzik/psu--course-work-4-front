import { connect } from 'react-redux';
import InterestingFact from '../../components/interesting-fact';
import { loadFact } from '../../actions/interesting-fact';

const mapStateToProps = state => ({
  fact: state.preview.fact,
});

const mapDispatchToProps = {
  loadFact,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestingFact);