import keyMirror from 'keymirror';

const actions = keyMirror({
  USER_LOAD_REQUESTED: null,
  USER_LOAD_SUCCESSFUL: null,
  USER_LOAD_ERROR: null,
});

export default actions;