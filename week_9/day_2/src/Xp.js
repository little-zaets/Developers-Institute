import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { reducer } from '../src/reducers/index';
import './App.css';

const store = createStore(reducer);

function Xp() {
  return (
	  <>
		<Provider store={store}>
			<Counter />
		</Provider>
    </>
  );
}

export default Xp;
