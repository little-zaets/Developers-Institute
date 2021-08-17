// import React, { Component } from 'react';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';

//Exercise 1: HTML Tags In React
function App() {
  return (
    <div className="App">
      <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<MyComponent />
      </header>
    </div>
  );
}

export default App;


