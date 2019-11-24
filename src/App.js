import React, { Component } from "react";
import Game from './components/Game/game';
import "./assets/css/gameTennis.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Game/>
      </div>
    );
  }
}
