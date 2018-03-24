import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebCam from './WebCam';
import web3 from './web3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{margin: 'auto'}}>
          <WebCam />
        </div>
      </div>
    );
  }
}

export default App;
