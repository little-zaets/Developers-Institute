import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppXp from './XpCounter';
import AppRobots from './Robots';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'tachyons';

import { searchRobots, requestRobots } from './RobotsRedux/reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
		<AppRobots />
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

