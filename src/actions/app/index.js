import { createActions } from 'redux-actions';
import actionType from '../action-types';
import message from '../../shared/messages';
import {
  checkUserToken,
} from '../../pages/AUTH_PAGE/actions';

const {
  appLoadRequested,
  appLoadSuccessful,
  appLoadError,
} = createActions({
  [actionType.APP_LOAD_REQUESTED]: () => ({}),
  [actionType.APP_LOAD_SUCCESSFUL]: () => ({}),
  [actionType.APP_LOAD_ERROR]: (error) => ({ error }),
});

const initApplication = () => async (dispatch) => {
  dispatch(appLoadRequested());

  try {
    dispatch(checkUserToken());
    setTimeout(() => {
      dispatch(appLoadSuccessful());
    }, 3000);
  } catch (error) {
    console.error(error);
    dispatch(appLoadError(message.en.SOMETHING_WENT_WRONG));
  }
};

export {
  initApplication,
}