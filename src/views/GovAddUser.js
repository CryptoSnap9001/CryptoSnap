import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class GovAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      benefit: 0,
      message: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password, benefit } = this.state;
    console.log(email,password,benefit)
    axios
      .post("https://us-central1-cryptosnap-9001.cloudfunctions.net/newUser", {
        "email": email,
        "password": password,
        "benefit": benefit
      })
      .then(_ => {
        this.setState({
          message: "New user successfully added!"
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="Government-Add-User">
        <h4>Add new beneficiary</h4>
        {this.state.message ? (
          <h4>{this.state.message}</h4>
        ) : (
          <form onSubmit={this.onSubmit}>
            <label>
              Email:
              <input
                name="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Password:
              <input
                name="password"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Monthly SNAP benefit:
              <input
                name="benefit"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    );
  }
}

const MapState = null;
const MapDispatch = null;

export default connect(MapState, MapDispatch)(GovAddUser);
