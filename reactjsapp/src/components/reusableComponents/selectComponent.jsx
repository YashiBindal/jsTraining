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
    this.props.onChange(evt.target.value);
  }

  render() {
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
