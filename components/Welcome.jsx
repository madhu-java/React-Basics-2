import React, { Component } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
class Welcome extends Component {
  state = {};
  render() {
    console.log("From Welcome");
    let userId = 1006;
    return (
      <div>
        <h1>Welcome</h1>

        {/* <Redirect to="/faqs/1006/ABC"/> */}
        <Link to="/about">About</Link>
        <Link to="/contactus">ContactUs</Link>
        <NavLink to={"/faqs/" + userId} activeStyle={{ fontWeight: "bold" }}>
          Faqs
        </NavLink>
      </div>
    );
  }
}

export default Welcome;
