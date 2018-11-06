import { createActions } from 'redux-actions';
import actionType from '../action-types';
import message from '../../../../shared/messages';
import { API } from '../../../../shared/config';

const {
  interestingFactLoadRequested,
  interestingFactLoadSuccessful,
  interestingFactLoadError,
} = createActions({
  [actionType.INTERESTING_FACT_LOAD_REQUESTED]: () => ({}),
  [actionType.INTERESTING_FACT_LOAD_SUCCESSFUL]: (value) => ({ value }),
  [actionType.INTERESTING_FACT_LOAD_ERROR]: (error) => ({ error }),
});

const loadFact = () => async (dispatch) => {
  dispatch(interestingFactLoadRequested());

  try {
    const response = await fetch(`${API}/interesting-fact`);
    const responseData = await response.json();
    const data = responseData.fact;

    dispatch(interestingFactLoadSuccessful(data));
  } catch (error) {
    console.error(error);
    dispatch(interestingFactLoadError(message.en.SOMETHING_WENT_WRONG));
  }
};

export {
  loadFact,
};
