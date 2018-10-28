import { handleActions } from 'redux-actions';
import actionType from '../actions/action-types';

const initialState = {
  isLoading: false,
  token: null,
};

const reducer = handleActions({
  [actionType.USER_LOAD_REQUESTED]: () => ({
    isLoading: true,
  }),
  [actionType.USER_LOAD_SUCCESSFUL]: (state, { payload: { token } }) => ({
    isLoading: false,
    token,
  }),
  [actionType.USER_LOAD_ERROR]: (state, { payload: { error } }) => ({
    ...state,
    error,
    isLoading: false,
  }),
}, initialState);

export default reducer;