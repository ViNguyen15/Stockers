import React, { Component } from "react";
import {Route} from 'react-router-dom';
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
import Sidenav from "./components/sideNav";
import { Container } from "react-bootstrap";


class App extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://www.blackrock.com/tools/hackathon/performance?identifiers=IXN"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isloaded: true,
          items: json
        });
      });
  }
  render() {
    return (
      <div>
=======
  
  render() {
    return (
        <div>
>>>>>>> 2448f7bd3280240ab5700a3efa39e320de1d05f5
        <Navbar />
        </div>
<<<<<<< HEAD
      </Fragment> */}

        <DashComp></DashComp>
        <hr></hr>

        <Logos>hi</Logos>
        <hr></hr>
      </div>
=======
  
>>>>>>> 2448f7bd3280240ab5700a3efa39e320de1d05f5
    );
  }
}

export default App;
