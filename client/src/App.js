import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./grocery-icon.png')} alt="grocery bag icon" />
        <Users />
      </header>
    </div>
  );
}

export default App;
