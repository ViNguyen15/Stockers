import React from "react";

export default class logo extends React.Component {
  constructor() {
    super();
    this.state = {
      dash: "-"
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>Stockers:</h1>
        <div></div>
      </React.Fragment>
    );
  }
}
