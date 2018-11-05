import { combineReducers } from 'redux';
import fact from './interesting-fact';

const reducers = combineReducers({
  fact,
});

export default reducers;