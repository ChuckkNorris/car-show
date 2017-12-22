import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarShow from "./modules/car-show/car-show.container";

class App extends Component {
  render() {
    return (
      <div>
        <CarShow />
      </div>
    );
  }
}

export default App;
