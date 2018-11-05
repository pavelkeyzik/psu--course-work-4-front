import { handleActions } from 'redux-actions';
import actionType from '../actions/action-types';

const initialState = {
  isLoading: false,
};

const reducer = handleActions({
  [actionType.APP_LOAD_REQUESTED]: () => ({
    isLoading: true,
  }),
  [actionType.APP_LOAD_SUCCESSFUL]: () => ({
    isLoading: false,
  }),
  [actionType.APP_LOAD_ERROR]: (state, { payload: { error } }) => ({
    ...state,
    error,
    isLoading: false,
  }),
}, initialState);

export default reducer;