import React, { Component } from "react";
// import {Route} from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Welcome from './components/Welcome';
//import withSplashScreen from "./components/withSplashScreen";
//import logo from "./logo.svg";
import DashComp from "./components/dashboardcomp.jsx";
//import Tabs from "./components/tabs.jsx";
//import Ham from "./components/ham.jsx";
//import "./App.css";
import Logos from "./components/logo.jsx";
import Tabs from "./components/tabs.jsx";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        {/* <Ham /> */}
=======
        <Ham >
>>>>>>> 2ddb6e005d26a406f428a346b32a0f67f5ec6ddf
        <hr></hr>
        <Navbar />
        <Tabs></Tabs>
        <hr></hr>
<<<<<<< HEAD

=======
        {/* <Fragment>
        <NavBar />
        <div className="container-fluid">
          <Route path="/" exact component={Welcome} />
        </div>
      </Fragment> */}
  </Ham>
>>>>>>> 2ddb6e005d26a406f428a346b32a0f67f5ec6ddf
        <DashComp></DashComp>
        <hr></hr>

        <Logos>hi</Logos>
        <hr></hr>
      </div>
    );
  }
}

export default App;
