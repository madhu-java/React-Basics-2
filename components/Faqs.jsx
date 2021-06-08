import React, { Component } from "react";
import Contactus from "./Contactus";
import { Prompt } from "react-router-dom";
class Faqs extends Component {
  state = { value: false, isTransactionCompleted: false };

  handleRedirect = () => {
    //---Some activity
    // ----
    // ---
    // --
    let userInfo = {
      userName: "ABC",
      userPlace: "XYZ",
      age: 25,
    };
    // this.props.history.goBack();
    // this.props.history.block({ promt: "Sorry Cannot proceed..!" });
    this.setState(
      {
        isTransactionCompleted: true,
      },
      () => {
        this.props.history.push({
          pathname: `/contactus/956486`,
          state: {
            userInfo,
            ...userInfo,
            // userInfo:userInfo
          },
        });
      }
    );

    // this.setState({
    //   value: true,
    // });
  };

  render() {
    console.log("Props : ", this.props);
    console.log("Props : ", this.props.match.params);
    console.log("Props : ", this.props.match.params.userId);
    // if (this.state.value) {
    //   return <Redirect to="" />;
    // }
    return (
      <>
        <Prompt
          when={!this.state.isTransactionCompleted}
          message="Are your sure want to  navigate.!?"
        />
        <h1>Faq</h1>
        <button onClick={this.handleRedirect}>Go to Contact-us</button>
        <Contactus />
      </>
    );
  }
}

export default Faqs;
