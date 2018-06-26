/* @flow */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
	children: ''
};

class App extends Component<Props> {

  hello(num: number): boolean {
    return "abc";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.hello}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
