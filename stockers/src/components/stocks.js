import React, { Component } from 'react'
import StockCard from './stockCard';
import { Container, Row, Col } from 'react-bootstrap';


export default class stocks extends Component {
    state = {
        latestPerf: {

        }
    };

    render() {
        return (
               <React.Fragment>
        <h1>Stocks Component</h1>
        <Container>
        <Row>
        <Col sm><StockCard 
        header="Nintendo" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.46 (-0.33%) After Hours"/></Col>
    <Col sm><StockCard 
    header="Tesla" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.46 (-0.33%) After Hours"/></Col>
    <Col sm><StockCard header="Sony" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.46 (-0.33%) After Hours"/></Col>
  </Row>
</Container>
      </React.Fragment>
        );
    }
}
