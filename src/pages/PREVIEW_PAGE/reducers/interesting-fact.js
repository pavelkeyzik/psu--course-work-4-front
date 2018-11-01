import { handleActions } from 'redux-actions';
import actionType from '../actions/action-types';

const initialState = {
  isLoading: false,
  value: null,
};

const reducer = handleActions({
  [actionType.INTERESTING_FACT_LOAD_REQUESTED]: () => ({
    isLoading: true,
  }),
  [actionType.INTERESTING_FACT_LOAD_SUCCESSFUL]: (state, { payload: { value } }) => ({
    isLoading: false,
    value,
  }),
  [actionType.INTERESTING_FACT_LOAD_ERROR]: (state, { payload: { error } }) => ({
    ...state,
    error,
    value: null,
    isLoading: false,
  }),
}, initialState);

export default reducer;