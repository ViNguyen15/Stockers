import React, { Component } from 'react'
import StockCard from './stockCard';
import { Container, Row, Col } from 'react-bootstrap';


export default class stocks extends Component {
    // loaddata() {
    //     const baseURL = "https://cors-container.herokuapp.com/";
    //     const requestURL = "https://www.blackrock.com/tools/hackathon/performance?identifiers=LRRCX%2CSSMJX%2CGDNEY%2CANW%2CQUS%2CEWGS%2CSSTEEL%2CFMISX%2CVQCGX%2CARGW";
    //     fetch(baseURL + requestURL)
    //     .then(res => res.json()).then((res) => this.setState(this.jsonResponse = res))
    //     .catch(err => console.log(err));
    // }

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
