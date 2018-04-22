import React, { Component } from "react";
import { connect } from "react-redux";

class GovAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      deposit: 0
    };
  }

  onSubmit = event => {
    event.preventDefault();
    //firebase add user

  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="Government-Add-User">
        <h4>Add new beneficiary</h4>
        <form onSubmit={this.onSubmit}>
          <label>
            First Name:
            <input
              name="first"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            First Name:
            <input
              name="last"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Monthly SNAP benefit:
            <input
              name="deposit"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const MapState = null;
const MapDispatch = null;

export default connect(MapState, MapDispatch)(GovAddUser);
