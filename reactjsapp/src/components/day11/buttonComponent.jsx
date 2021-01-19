import React, { Component } from "react";

export class ButtonComponent extends Component {
  render() {
    const {
      id,
      value,
      onClick,
      type = "button",
      variant = "warning",
    } = this.prop;
    return (
      <button
        onClick={onClick}
        value={value}
        type={type}
        className={`btn btn-${variant}`}
        id={id}
      >
        {value}
      </button>
    );
  }
}

export default ButtonComponent;
