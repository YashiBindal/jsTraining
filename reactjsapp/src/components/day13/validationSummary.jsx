import React, { Component } from "react";
class ValidationSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tempArr = [];
    for (const [key, value] of Object.entries(this.props.messages)) {
      console.log(`${key}: ${value}`);
      if (value) {
        tempArr = [...tempArr, value];
      }
    }

    return tempArr.length ? (
      <div>
        {tempArr.map((m, idx) => (
          <React.Fragment key={idx}>
            <strong>{m}</strong>
            <br />
          </React.Fragment>
        ))}
      </div>
    ) : (
      <div>All Valid</div>
    );
  }
}

export default ValidationSummaryComponent;
