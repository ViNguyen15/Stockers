import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import App from '../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Tutorials from './tutorials';
import Stocks from './stocks';
import Simulate from './simulate';
import Portfolio from './portfolio';
import StockCard from './stockCard';
import dashcomp from "./dashboardcomp";
import Home from "./home";


export default class navbar extends React.Component {
    render() {
        return (
        <Router>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Stockers</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/tutorials">Tutorials</Nav.Link>
              <Nav.Link href="/stocks">Stocks</Nav.Link>
              <Nav.Link href="/simulate">Simulate</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tutorials">
            <Tutorials />
          </Route>
          <Route path="/dashboard">
            <dashcomp />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/simulate">
            <Simulate />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
    </Router>

        );}}          
