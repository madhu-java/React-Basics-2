import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Contactus extends Component {
  state = {};
  render() {
    console.log("From Contactus Props : ", this.props);
    return (
      <div>
        <h1> Contact us</h1>
      </div>
    );
  }
}

export default withRouter(Contactus);
