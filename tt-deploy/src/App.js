import React, { Component } from 'react';
import Page from './Page'
import './App.css';
import { BrowserRouter} from "react-router-dom";

class App extends Component {
  componentDidMount() {
    document.title = "Threaded Tweeter";
  }

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
