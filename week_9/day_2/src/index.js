import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DailyChallenge from './DailyChallenge';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { reducers } from './reducers';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={createStore(reducers)}>
			<DailyChallenge />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
