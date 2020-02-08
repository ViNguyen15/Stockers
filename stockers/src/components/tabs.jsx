import React from "react";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: -1,
      data: [
        {
          id: "1",
          name: "Home",
          info: ""
        },
        {
          id: "2",
          name: "Tutorial",
          info: "This is a tutorial for how to start trading in stocks."
        },
        { id: "3", name: "Stocks", info: "buy, sell,short " },
        { id: "4", name: "Simulate", info: "..." },
        { id: "5", name: "Portfolio", info: "your stocks." }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentTab) {
    this.setState({ currentTab });
  }

  render() {
    return (
      <div>
        {/* <h1>STOCKERS</h1>
        <br></br> */}
        <div className="tab">
          {this.state.data.map((button, i) => (
            <button
              key={button.name}
              className="tablinks"
              onClick={() => this.handleClick(i)}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div className="tabcontent">
          {this.state.currentTab !== -1 && (
            <React.Fragment>
              <h3>{this.state.data[this.state.currentTab].name}</h3>
              <p>{this.state.data[this.state.currentTab].info}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
