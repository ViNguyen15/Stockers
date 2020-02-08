import React from "react";

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
        <div></div>
        <h2>
          Tesla:
          {"$745.61 "}
          <span style={{ color: "green" }}>{this.state.dash}</span>
          <h2>
            -$0.89 (-0.12%) Today <br></br>-$2.46 (-0.33%) After Hours
          </h2>
        </h2>
      </React.Fragment>
    );
  }
}
