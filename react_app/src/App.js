import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { channels } from './shared/constants';
const { ipcRenderer } = window.require('electron');


function App() {

    const getData = () => {
        // This 'notebook' gets sent to the backend to be logged
        ipcRenderer.send(channels.GET_DATA, { product: 'notebook' });
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This app was coded by Maxwell Flitton using electron and react
        </p>
          <button onClick={getData}>Get data</button>
      </header>
    </div>
  );
}

export default App;
