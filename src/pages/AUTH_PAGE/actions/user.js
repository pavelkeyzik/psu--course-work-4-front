import { createActions } from 'redux-actions';
import actionType from './action-types';
import message from '../../../shared/messages';
import { Storage } from '../../../services';

const {
  userLoadRequested,
  userLoadSuccessful,
  userLoadError,
} = createActions({
  [actionType.USER_LOAD_REQUESTED]: () => ({}),
  [actionType.USER_LOAD_SUCCESSFUL]: (token) => ({ token }),
  [actionType.USER_LOAD_ERROR]: (error) => ({ error }),
});

const signIn = () => async (dispatch) => {
  dispatch(userLoadRequested());

  try {
    setTimeout(() => {
      const token = 'GENERATED_TOKEN';
      Storage.saveUser(token);
      dispatch(userLoadSuccessful(token));
    }, 1500);
  } catch (error) {
    console.error(error);
    dispatch(userLoadError(message.en.SOMETHING_WENT_WRONG));
  }
};

const signUp = () => async (dispatch) => {
  dispatch(userLoadRequested());

  try {
    setTimeout(() => {
      const token = 'GENERATED_TOKEN';
      Storage.saveUser(token);
      dispatch(userLoadSuccessful(token));
    }, 1500);
  } catch (error) {
    console.error(error);
    dispatch(userLoadError(message.en.SOMETHING_WENT_WRONG));
  }
};

const checkUserToken = () => async (dispatch) => {
  const token = await Storage.getUserToken();
  dispatch(userLoadSuccessful(token));
};

const logout = () => async (dispatch) => {
  await Storage.clearUser();
  dispatch(userLoadSuccessful(null));
};

export {
  signIn,
  signUp,
  logout,
  checkUserToken,
}