import { combineReducers } from 'redux';
import recent from './recent-activity';

const reducers = combineReducers({
  data: recent,
});

export default reducers;