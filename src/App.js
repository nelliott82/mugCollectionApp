import React from 'react';
import nikkosMugTitle from './nikkosmugtitle.png';
import Mugs from './Mugs.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nikkosMugTitle} className="App-logo" alt="logo" />
        <p style={{width: '50%'}}>
          Click on a mug below to learn more about it. Once you've decided which mug you want to use, click "Select" and then mug it up!
        </p>
        <Mugs />
      </header>
    </div>
  );
}

export default App;
