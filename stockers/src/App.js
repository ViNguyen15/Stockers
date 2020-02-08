import React, { Component, Fragment } from "react";
// import {Route} from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Welcome from './components/Welcome';
import withSplashScreen from './components/withSplashScreen';
//import logo from "./logo.svg";
import DashComp from "./components/dashboardcomp.jsx";
//import Tabs from "./components/tabs.jsx";
import Ham from "./components/ham.jsx";
//import "./App.css";
import Logos from "./components/logo.jsx"

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Ham />
        <hr></hr>
=======

        {/* <Fragment>
        <NavBar />
        <div className="container-fluid">
          <Route path="/" exact component={Welcome} />
        </div>
      </Fragment> */}

>>>>>>> 8d505a272970ff3e1739e7aee45cc51a6bec8ca9
        <DashComp></DashComp>
        <hr></hr>
        <Logos>hi</Logos>
        <hr></hr>
      </div>
    );
  }
}

export default (App);
