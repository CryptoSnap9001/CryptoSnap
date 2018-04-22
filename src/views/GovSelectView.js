import React, { Component } from "react";
import { connect } from "react-redux";

class GovSelectView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = event => {
    event.preventDefault();
    const setView = this.props.setView
    const name = event.target.name;
    setView(name);
  }

  render() {
    const setView = this.props.setView;
    return (
      <div className="Government-Select-View">
        <button name='addUser' onClick={this.onClick}>Add User</button>
        <button name='approveCart' onClick={this.onClick}>Approve Cart</button>
        <button name='lookupUser' onClick={this.onClick}>
          Lookup User Information
        </button>
        <button name='addRetailer' onClick={this.onClick}>Add Retailer</button>
      </div>
    );
  }
}

const MapState = null;
const MapDispatch = null;

export default connect(MapState, MapDispatch)(GovSelectView);
