import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Robots';
// import App from './Xp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'tachyons';
import { reducer } from './dailychallenge/reducers';

const store = createStore(reducer,applyMiddleware(logger, thunk));

ReactDOM.render(
  	<React.StrictMode>
    	<Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


