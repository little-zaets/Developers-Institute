import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MiniProject';
// import App from './MovieApp';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './MiniProjectRedux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
	 	<BrowserRouter>
			<App />
	 	</BrowserRouter>
	</Provider>,
  document.getElementById('root')
);


