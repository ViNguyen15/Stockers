import React, { Component } from 'react'
import StockCard from './stockCard';
import { Container, Row, Col } from 'react-bootstrap';


export default class stocks extends Component {
    state = {
        latestPerf: {
        },
        jsonResponse: {},
    };

    // Test URL
    // https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW"
    
    
    componentDidMount() {
        const baseURL = "https://cors-container.herokuapp.com/";
        const requestURL = "https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW";
        fetch(baseURL + requestURL)
        .then(res => res.json()).then((res) => this.setState(this.jsonResponse = res))
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.jsonResponse);
        return (
        <React.Fragment>
            <br/><br/>
        <Container>
        <Row>
        <Col sm><StockCard 
        header="Nintendo - NTDOY" 
        title="$46.03"
        text="-0.30 (-0.65%) Today -$4.16 (-0.96%) After Hours"/></Col>
    <Col sm><StockCard 
    header="Tesla - TSLA" 
        title="$745.61"
        text="-$0.89 (-0.12%) Today -$2.76 (-0.13%) After Hours"/></Col>
    <Col sm><StockCard header="Sony - SNE" 
        title="$745.61"
        text="-$0.29 (-0.12%) Today -$1.46 (-0.43%) After Hours"/></Col>
  </Row><br/><br/>
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
        </Row>
</Container>
      </React.Fragment>
        );
    }
}