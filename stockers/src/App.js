import React, { Component } from "react";
//import logo from "./logo.svg";
import DashComp from "./components/dashboardcomp.jsx";
//import "./App.css";
import Logos from "./components/logo.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <DashComp></DashComp>
        <hr></hr>
        <Logos>hi</Logos>
        <hr></hr>
      </div>
    );
  }
}

export default App;
