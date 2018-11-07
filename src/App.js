import React, { Component } from "react";
import SwatchSelector from "./components/SwatchSelector";
import "./App.css";

class App extends Component {
  swatches = {};
  render() {
    return (
      <div className="App">
        <SwatchSelector />
      </div>
    );
  }
}

export default App;
