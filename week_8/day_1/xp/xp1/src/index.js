import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// /////Exercise 1: First React App
// ReactDOM.render(
// 	<h1>Hello World!</h1>,
// 	document.getElementById('root')
// );

// // reportWebVitals();

// // /////Exercise 2: No JSX
const myelement = React.createElement('h1', {}, 'Hello World!');
ReactDOM.render(myelement, document.getElementById('root'));

// /////Exercise 3: JSX Introduction
// //Create a React App
// //Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;
const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById('root'));
// //Create a constant variable named sum, which value is 5 + 5.
// //Render on the page, the result of the sum variable with some text - use jsx format.
//***Remaining exercises in App.js***
ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);

