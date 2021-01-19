import React, { Component } from "react";
import "./styles.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
    };
  }

  getValue = (event) => {
    //  clear textarea
    const value = event.target.value;

    if (value === "C") {
      this.setState({ inputString: "" });
      return;
    }
    //   evaluate result
    if (value === "=") {
      //   this.setState({
      //     inputString: eval(this.inputString),
      //   });
      this.setState((prevState) => ({
        // eslint-disable-next-line no-eval
        inputString: eval(prevState.inputString),
      }));
      return;
    }

    this.setState((prevState) => ({
      inputString: prevState.inputString + value,
    }));

    return;
  };

  render() {
    return (
      <div className="wrap">
        <h1>Basic Calculator</h1>
        <textarea
          id="result"
          rows="3"
          value={this.state.inputString}
          readOnly
        />
        <div className="buttonContainer">
          <button
            onClick={this.getValue}
            value="C"
            type="button"
            className="btn btn-warning"
            id="clear"
          >
            C
          </button>
          <button
            onClick={this.getValue}
            value="="
            type="button"
            className="btn btn-warning"
            id="equals"
          >
            =
          </button>
          <button
            onClick={this.getValue}
            value="%"
            type="button"
            className="btn btn-warning"
            id="divide"
          >
            %
          </button>
          <button
            onClick={this.getValue}
            value="1"
            type="button"
            className="btn btn-secondary"
            id="one"
          >
            1
          </button>
          <button
            onClick={this.getValue}
            value="2"
            type="button"
            className="btn btn-secondary"
            id="two"
          >
            2
          </button>
          <button
            onClick={this.getValue}
            value="3"
            type="button"
            className="btn btn-secondary"
            id="three"
          >
            3
          </button>
          <button
            onClick={this.getValue}
            value="/"
            type="button"
            className="btn btn-warning"
            id="divide"
          >
            /
          </button>
          <button
            onClick={this.getValue}
            value="4"
            type="button"
            className="btn btn-secondary"
            id="four"
          >
            4
          </button>
          <button
            onClick={this.getValue}
            value="5"
            type="button"
            className="btn btn-secondary"
            id="five"
          >
            5
          </button>
          <button
            onClick={this.getValue}
            value="6"
            type="button"
            className="btn btn-secondary"
            id="six"
          >
            6
          </button>
          <button
            onClick={this.getValue}
            value="*"
            type="button"
            className="btn btn-warning"
            id="multiply"
          >
            x
          </button>
          <button
            onClick={this.getValue}
            value="7"
            type="button"
            className="btn btn-secondary"
            id="seven"
          >
            7
          </button>
          <button
            onClick={this.getValue}
            value="8"
            type="button"
            className="btn btn-secondary"
            id="eight"
          >
            8
          </button>
          <button
            onClick={this.getValue}
            value="9"
            type="button"
            className="btn btn-secondary"
            id="nine"
          >
            9
          </button>
          <button
            onClick={this.getValue}
            value="-"
            type="button"
            className="btn btn-warning"
            id="minus"
          >
            -
          </button>
          <button
            onClick={this.getValue}
            value="0"
            type="button"
            className="btn btn-secondary"
            id="zero"
          >
            0
          </button>
          <button
            onClick={this.getValue}
            value="."
            type="button"
            className="btn btn-secondary"
            id="dot"
          >
            .
          </button>
          <button
            onClick={this.getValue}
            value="+"
            type="button"
            className="btn btn-warning"
            id="add"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
