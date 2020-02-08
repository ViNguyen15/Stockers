import React, { Component } from "react";
//import logo from "./logo.svg";
import DashComp from "./components/dashboardcomp.jsx";
//import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <DashComp></DashComp>
        <hr></hr>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
