import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class navbar extends React.Component {
    render() {
        return (
    
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Stockers</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#tutorial">Tutorial</Nav.Link>
      <Nav.Link href="#stocks">Stocks</Nav.Link>
      <Nav.Link href="#simulate">Simulate</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        );
}}
