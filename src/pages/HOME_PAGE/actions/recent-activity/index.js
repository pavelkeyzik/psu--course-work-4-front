import { createActions } from 'redux-actions';
import actionType from '../action-types';
import { messages } from '../../../../shared';
import { API } from '../../../../shared/config';

const {
  recentActivityGetRequested,
  recentActivityGetSuccessful,
  recentActivityGetError,
} = createActions({
  [actionType.RECENT_ACTIVITY_GET_REQUESTED]: () => ({}),
  [actionType.RECENT_ACTIVITY_GET_SUCCESSFUL]: (activity) => ({ activity }),
  [actionType.RECENT_ACTIVITY_GET_ERROR]: (error) => ({ error }),
});

const gerRecentActivity = () => async (dispatch) => {
  dispatch(recentActivityGetRequested());

  try {
    const response = await fetch(`${API}/fines?limit=3&order=date&direction=desc`)
    const responseData = await response.json();
    dispatch(recentActivityGetSuccessful(responseData));
  } catch (error) {
    console.error(error);
    dispatch(recentActivityGetError(messages.en.SOMETHING_WENT_WRONG));
  }
};

export {
  gerRecentActivity,
}