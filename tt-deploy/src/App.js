import React, { Component } from 'react';
import Page from './Page'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Page />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
