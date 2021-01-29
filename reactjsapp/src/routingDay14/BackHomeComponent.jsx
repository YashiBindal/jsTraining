import React, { Component } from "react";
import { Link } from "react-router-dom";

class BackHomeComponent extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" value="" style={{ margin: "10px" }}>
          <Link to="/" style={{ color: "white" }}>
            Back to Home Page
          </Link>
        </button>
      </div>
    );
  }
}

export default BackHomeComponent;
