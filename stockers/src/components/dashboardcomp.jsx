import React from "react";
import StockCard from '../components/stockCard';
import { Container, Row, Col } from 'react-bootstrap';

export default class dashcomp extends React.Component {
  constructor() {
    super();
    this.state = {
      dash: "-"
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>Dashboard:</h1>
        <Container>
        <Row>
        <Col sm><StockCard header="Nintendo" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.46 (-0.33%) After Hours"/></Col>
    <Col sm><StockCard header="Tesla" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.46 (-0.33%) After Hours"/></Col>
    <Col sm><StockCard header="Sony" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.46 (-0.33%) After Hours"/></Col>
  </Row>
</Container>
        
        {/* <h2>
          Tesla:
          {"$745.61 "}
          <span style={{ color: "green" }}>{this.state.dash}</span>
          <h2>
            -$0.89 (-0.12%) Today <br></br>-$2.46 (-0.33%) After Hours
          </h2>
        </h2> */}
      </React.Fragment>
    );
  }
}
