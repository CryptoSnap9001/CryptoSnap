import React, { Component } from "react";
import { connect } from "react-redux";

class GovAddRetailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
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
      <div className="Government-Add-Retailer">
        <h4>Add new retailer</h4>
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address:
            <input
              name="address"
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

export default connect(MapState, MapDispatch)(GovAddRetailer);
