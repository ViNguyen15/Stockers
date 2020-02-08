import React from "react";
import { Card, Button } from 'react-bootstrap';

export default class stockCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          header: "",
          title: "",
          text: "",
        };
        };

    render() {
        return (
<Card>
  <Card.Header>{this.props.header}</Card.Header>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
);
}}
