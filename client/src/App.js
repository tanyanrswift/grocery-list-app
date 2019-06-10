import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Users from './Users';
import Landing from './Landing';
import Items from './Items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
        <Items />
      </header>
    </div>
  );
}

export default App;
