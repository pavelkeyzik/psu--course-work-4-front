import keyMirror from 'keymirror';

const actions = keyMirror({
  APP_LOAD_REQUESTED: null,
  APP_LOAD_SUCCESSFUL: null,
  APP_LOAD_ERROR: null, 
});

export default actions;