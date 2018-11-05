import keyMirror from 'keymirror';

const actions = keyMirror({
  INTERESTING_FACT_LOAD_REQUESTED: null,
  INTERESTING_FACT_LOAD_SUCCESSFUL: null,
  INTERESTING_FACT_LOAD_ERROR: null,
});

export default actions;