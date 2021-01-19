import React, { Component } from "react";

/* 
 onChange
 value
 options []
 */
class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(evt) {
    // the selected value is a function props type
    // this will be subscribed by the parent to receive the
    // emitted data from the current component
    this.props.onChange(evt.target.value);
  }

  render() {
    // this.props.dataSource, represent the data
    // received from the parent
    // value={this.props.stateData, the state property
    // passed to the DroDownComponent will be changed
    // when the value from the option is selected

    // to emit the selected data from current component to its parent
    // write the onChange event
    return (
      <select
        className="form-control"
        value={this.props.value}
        onChange={this.handleChange.bind(this)}
      >
        <option value="" disabled defaultValue="">
          --Please choose an option--
        </option>
        {this.props.options.map((val, idx) => (
          <option key={idx} value={val}>
            {val}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectComponent;
