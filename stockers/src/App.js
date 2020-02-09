import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashComp from "./components/dashboardcomp.jsx";
import Logos from "./components/logo.jsx";
import Tabs from "./components/tabs.jsx";
import Navbar from "./components/navbar";
import Sidenav from "./components/sideNav";
import { Container } from "react-bootstrap";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false
    };
  }

  // componentDidMount() {
  //   fetch(
  //     "https://www.blackrock.com/tools/hackathon/performance?identifiers=IXN"
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isloaded: true,
  //         items: json
  //       });
  //     });
  // }
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
