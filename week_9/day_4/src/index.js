import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppXp from './XpCounter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer } from './redux/reducers';

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
		<AppXp />
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

