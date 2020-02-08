import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
export default class navbar extends React.Component {
    render() {
        return (
            <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                style={{'backgroundColor': 'dimgray'}}
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="tutorials">
                        <NavIcon>
                            <i className="fa fa-fw fa-book-open" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Tutorials
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="stocks">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Stocks
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="simulate">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        </NavIcon>
                        <NavText>
                            Simulate
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="portfolio">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        </NavIcon>
                        <NavText>
                            Portfolio
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                {/* <Route path="/" exact component={props => <RootComponent />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/devices" component={props => <Devices />} /> */}
            </main>
        </React.Fragment>
    )}
    />
</Router>
);}}
// 
