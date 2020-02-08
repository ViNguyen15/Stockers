import React, { Component, Fragment } from "react";
// import {Route} from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Welcome from './components/Welcome';
import withSplashScreen from './components/withSplashScreen';
//import logo from "./logo.svg";
import DashComp from "./components/dashboardcomp.jsx";
//import "./App.css";
import Logos from "./components/logo.jsx"

class App extends Component {
  render() {
    return (
      <div>

        {/* <Fragment>
        <NavBar />
        <div className="container-fluid">
          <Route path="/" exact component={Welcome} />
        </div>
      </Fragment> */}

        <DashComp></DashComp>
        <hr></hr>
        <Logos>hi</Logos>
        <hr></hr>
      </div>
    );
  }
}

export default (App);
