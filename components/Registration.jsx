import React, { Component } from "react";
class Registration extends Component {
  state = {
    data: {
      name: "",
      email: "",
      gender: "",
      fruits_veggies: "",
      type_of_fruits: "",
      country: "",
      state: "",
    },
    fruitsList: ["Mango", "Apple", "Orange"],
    colorList: ["Blue", "Yellow", "Red"],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.gender);
    console.log(this.state.fruits_veggies);
    console.log(this.state.type_of_fruits);
  };
  render() {
    let dropDownValue =
      this.state.fruits_veggies === ""
        ? []
        : this.state.fruits_veggies === "Fruits"
        ? [...this.state.fruitsList]
        : [...this.state.colorList];
    return (
      <main>
        <form>
          UserName:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          Gender:
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
          ></input>
          Female
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
          ></input>
          Male
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={this.state.gender === "Other"}
            onChange={this.handleChange}
          ></input>
          Other
          <br />
          <br /> What do you like:
          <br />
          <input
            type="radio"
            name="fruits_veggies"
            value="Fruits"
            checked={this.state.fruits_veggies === "Fruits"}
            onChange={this.handleChange}
          ></input>
          Fruits
          <input
            type="radio"
            name="fruits_veggies"
            value="Veggies"
            checked={this.state.fruits_veggies === "Veggies"}
            onChange={this.handleChange}
          ></input>
          Veggies
          <br />
          <br />
          <select
            type="select"
            name="type_of_fruits"
            value={this.state.type_of_fruits}
            onChange={this.handleChange}
          >
            {/* .map(_data,_index)
            <option value="">select</option> */}
            {dropDownValue.map((_data, _index) => {
              return <option value={_data}>{_data}</option>;
            })}
          </select>
          <br />
          <br />
          <button name="button" onClick={this.handleSubmit}>
            Register
          </button>
        </form>
      </main>
    );
  }
}

export default Registration;
