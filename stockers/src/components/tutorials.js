import React, { Component } from "react";
import { Image, Card, Col, Row, Container } from "react-bootstrap";

export default class tutorials extends Component {
  render() {
    return (
      <Container>
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col xs={10}>
            {" "}
            <Card>
              <Card.Header>
                <h3>Basic Stock Market Terms</h3>
              </Card.Header>
              <Card.Body>
                <Image
                  class="img-responsive center-block"
                  width="100%"
                  src="https://www.visualcapitalist.com/wp-content/uploads/2017/02/stock-market-terms-share.png"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col xs={10}>
            {" "}
            <Card>
              <Card.Header>
                <h3>Stock Market Indices</h3>
              </Card.Header>
              <Card.Body>
                <Image
                  class="img-responsive center-block"
                  width="100%"
                  src="https://www.visualcapitalist.com/wp-content/uploads/2017/07/stock-market-share.png"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={103}>
            <br />
            <br />
            <Card>
              <Card.Header>
                <h3>Basic Guide to Stock Market Shares</h3>
              </Card.Header>
              <Card.Body>
                <Image
                  class="img-responsive center-block"
                  width="100%"
                  src="https://s3.amazonaws.com/thumbnails.venngage.com/template/00f9f2df-1e70-429b-b0d0-9c1fc95e0892.png"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
