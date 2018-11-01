import { combineReducers } from 'redux';
import app from './app';
import user from '../pages/AUTH_PAGE/reducers';
import preview from '../pages/PREVIEW_PAGE/reducers';

const reducers = combineReducers({
  app,
  user,
  preview,
});

export default reducers;