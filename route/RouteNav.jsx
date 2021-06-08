import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Contactus from "../components/Contactus";
import Faqs from "../components/Faqs";
import Registration from "../components/Registration";
import Welcome from "../components/Welcome";
class RouteNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Welcome />
        <Switch>
          <Route path="/Welcome" exact component={Welcome} />

          <Route path="/Registration" exact component={Registration} />
          <Route path="/faqs/:userId" component={Faqs} />
          <Route path="/contactus/:loginId" component={Contactus} />
          <Route path="/" component={App} />
          <Route
            path=""
            render={() => {
              return <h1>Pagenot found</h1>;
            }}
          />
          
        </Switch>
      </div>
    );
  }
}

export default RouteNav;
