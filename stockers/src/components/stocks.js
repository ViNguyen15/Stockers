import React, { Component } from 'react'
import StockCard from './stockCard';
import { Container, Row, Col, ListGroup, ListGroupItem, Card } from 'react-bootstrap';


export default class stocks extends Component {
    state = {
        latestPerf: {
        },
        jsonResponse: {},
    };

    // Test URL
    // https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW"
    // "https://cors-container.herokuapp.com/https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW"
    // https://api.allorigins.win/raw?url=https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW"

    componentDidMount() {
        const baseURL = "https://cors-container.herokuapp.com/";
        const requestURL = "https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW";
        fetch("https://api.allorigins.win/raw?url=https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW")
        .then(res => res.json()).then((res) => this.setState(this.jsonResponse = res)).then(this.render())
        .catch(err => console.log(err))
    }

    formatAsPercentage(amt) {
        amt = parseFloat(amt);
        return amt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '&,');
    }

    doLoop = () => {
        let cards = [];
        let uniqueid = [];
        let oneMonth = "?";
        let yearToDate = "?";
        let threeYear = "?";
        let oneYear = "?";
        console.log(this.jsonResponse, "DoLoop");
        console.log(this.jsonResponse.resultMap.RETURNS.size, "RETURNS.SIZE");
        for (let i = 0; i < this.jsonResponse.resultMap.RETURNS.length; i++) {
            uniqueid.push(this.jsonResponse.resultMap.RETURNS[i].uniqueId);
        }
        console.log(uniqueid);
        for (let j = 0; j < this.jsonResponse.resultMap.RETURNS.length; j++) {
            if (this.jsonResponse.resultMap.RETURNS[j].latestPerf != undefined) {
                oneMonth = this.jsonResponse.resultMap.RETURNS[j].latestPerf.oneMonth;
                oneMonth = this.formatAsPercentage(oneMonth);
                yearToDate = this.jsonResponse.resultMap.RETURNS[j].latestPerf.yearToDate;
                yearToDate = this.formatAsPercentage(yearToDate);
                threeYear = this.jsonResponse.resultMap.RETURNS[j].latestPerf.threeYear;
                threeYear = this.formatAsPercentage(threeYear);
                oneYear = this.jsonResponse.resultMap.RETURNS[j].latestPerf.oneYear;
                oneYear = this.formatAsPercentage(oneYear);
            }
           cards.push( <Container><Row>
            <Col></Col>
            <Col xs={5}>
               <Card>
               <Card.Header><h4>{uniqueid[j]}</h4></Card.Header>
               <Card.Body>
                    <ListGroup variant="flush">
            <ListGroup.Item>One month: {oneMonth}%</ListGroup.Item>
            <ListGroup.Item>One Year: {oneYear}%</ListGroup.Item>
            <ListGroup.Item>Three Year: {threeYear}%</ListGroup.Item>
            <ListGroup.Item>Year to Date: {yearToDate}%</ListGroup.Item>
        </ListGroup>
        </Card.Body>
               </Card>
               </Col>
               <Col></Col>
               </Row>
               <br/><br/>
               </Container>
             ) ;}
                    console.log(cards, "cards");
                    return cards;

    }

    render() {
        // console.log(this.jsonResponse);
        if (this.jsonResponse == undefined) {
            // return(<div><h4>Loading Stocks...</h4></div>);
            return(
                <Container>
    <Row>
    <Col></Col>
    <Col xs={4}>
        <br/><br/><br/><br/>
      <img height="40%" src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=790b76111d46b766990d7fa2e273fb078d6e04260e9aaf64&rid=giphy.gif" roundedCircle />
    </Col>
    <Col></Col>
  </Row>
</Container>);
        }

        return (       
        <React.Fragment>
            <br/><br/>
        <Container>
            {this.doLoop()}

        {/* <Col sm><StockCard 
        header={this.jsonResponse.resultMap.RETURNS[0].ticker} 
        title="$46.03"
        text="-0.30 (-0.65%) Today -$4.16 (-0.96%) After Hours"/></Col>
    <Col sm><StockCard 
    header="Tesla - TSLA" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.76 (-0.13%) After Hours"/></Col>
    <Col sm><StockCard header="Sony - SNE" 
        title="$745.61"
        text="-$0.29 (-0.12%) Today -$1.46 (-0.43%) After Hours"/></Col>
  <br/><br/>
  <Row>
  <Col sm><StockCard 
        header="Microsoft - MSFT" 
        title="$145.69"
        text="+$0.45 (-0.11%) Today +$2.46 (+0.43%) After Hours"/></Col>
        <Col sm><StockCard 
        header="Google - GOOGL" 
        title="$71.12"
        text="+$0.39 (+0.14%) Today +$1.46 (+0.13%) After Hours"/></Col>
        <Col sm><StockCard 
        header="Teradyne - TER" 
        title="$45.61"
        text="+$0.89 (+0.09%) Today +$0.46 (+0.06%) After Hours"/></Col>
        </Row> */}
</Container>
      </React.Fragment>
        );
    }
}