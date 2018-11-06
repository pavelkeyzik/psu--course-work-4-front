import { combineReducers } from 'redux';
import app from './app';
import user from '../pages/AUTH_PAGE/reducers';
import preview from '../pages/PREVIEW_PAGE/reducers';
import home from '../pages/HOME_PAGE/reducers';

const reducers = combineReducers({
  app,
  user,
  preview,
  home,
});

export default reducers;