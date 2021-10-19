import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
	 	<Router>
			<App />
	 	</Router>
	</Provider>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('serviceWorker.js')
        .then((registration) => {
            console.log('SW Registered!')
            console.log(registration)
        })
        .catch((error) => {
            console.log('SW Registration failed!')
            console.log(error)
        })
}