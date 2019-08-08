import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travels from "./Travels";

//          <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          <h1>
            MY TRAVELS
          </h1>
          <Travels/>
        </a>
      </header>
    </div>
  );
}

export default App;
