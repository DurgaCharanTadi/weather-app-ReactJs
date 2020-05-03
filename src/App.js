import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={require('./images/logo.png')} alt="My Logo" height="100" width="140"/>
          <ul className="menuItems">
              <li>My Projects</li>
              <li>About</li>
          </ul>
      </div>

      <div className="content">
        <h2>This is a Weather Application designed in ReactJS</h2>
      </div>
    </div>
  );
}

export default App;
