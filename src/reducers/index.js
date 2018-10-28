import { combineReducers } from 'redux';
import app from './app';
import user from '../pages/AUTH_PAGE/reducers';

const reducers = combineReducers({
  app,
  user,
});

export default reducers;