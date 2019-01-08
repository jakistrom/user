import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
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
            Learn React
          </a>
          
        </header>
        <div className="container">
      <div className="row">
        <div className="bootstrap-test">
          1 of 3
        </div>
        <div className="bootstrap-test">
          2 of 3
        </div>
        <div className="bootstrap-test">
          3 of 3
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
