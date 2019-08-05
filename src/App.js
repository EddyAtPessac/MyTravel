import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Travel
        destination="Chateillallon"
        country="France"
        photo="https://www.tripadvisor.fr/LocationPhotoDirectLink-g196664-i18598665-Chatelaillon_Plage_Charente_Maritime_Nouvelle_Aquitaine.html"
        distance="150"
        />
        <Travel
        destination="Paris"
        country="France"
        photo="https://www.sortiraparis.com/news/in-paris/articles/47103-this-weekend-in-paris-august-2-3-and-4-2019/lang/en"
        distance="500"
        />
        </a>
      </header>
    </div>
  );
}

export default App;
