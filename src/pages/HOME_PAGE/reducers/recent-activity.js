import { handleActions } from 'redux-actions';
import actionType from '../actions/action-types';

const initialState = {
  isLoading: false,
  activity: null,
};

const reducer = handleActions({
  [actionType.RECENT_ACTIVITY_GET_REQUESTED]: () => ({
    isLoading: true,
  }),
  [actionType.RECENT_ACTIVITY_GET_SUCCESSFUL]: (state, { payload: { activity } }) => ({
    isLoading: false,
    activity: {
      ...state.activity,
      activity,
    },
  }),
  [actionType.RECENT_ACTIVITY_GET_ERROR]: (state, { payload: { error } }) => ({
    ...state,
    error,
    isLoading: false,
  }),
}, initialState);

export default reducer;