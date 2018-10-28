import { combineReducers } from 'redux';
import user from './user';

const reducers = combineReducers({
  data: user,
});

export default reducers;