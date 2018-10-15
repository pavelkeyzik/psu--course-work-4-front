import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
, document.getElementById('root'));
