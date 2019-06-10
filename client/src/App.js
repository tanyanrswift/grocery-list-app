import React from 'react';
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./grocery-icon.png')} alt="grocery bag icon" />
        <MainPage />
      </header>
    </div>
  );
}

export default App;
