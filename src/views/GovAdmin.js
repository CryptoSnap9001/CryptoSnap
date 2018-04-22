import React, { Component } from "react";
import { connect } from "react-redux";
import GovAddUser from "./GovAddUser";
import GovAddRetailer from "./GovAddRetailer";
import GovSelectView from "./GovSelectView";

class GovAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "default",
      previousViews: []
    };
  }

  setView = view => {
    const lastView = this.state.view;
    const newPreviousViews = [...this.state.previousViews, lastView];
    this.setState({
      view,
      previousViews: newPreviousViews
    });
  };

  selectComponents() {
    switch (this.state.view) {
      case "default":
        return <h2>Default view</h2>;
      case "addUser":
        return <GovernmentAddUser setView={this.setView} />;
      case "approveCart":
        return <h2>ApproveCart</h2>;
      case "lookupUser":
        return <h2>Lookup User</h2>;
      case "addRetailer":
        return (
          <GovernmentAddRetailer setView={this.setView} />
        )
    }
  }

  render() {
    return (
      <div className="Government-Main">
        <h2>Gov main!</h2>
        <GovernmentSelectView setView={this.setView} />
        <div>{this.selectComponents()}</div>
      </div>
    );
  }
}

const MapState = null;
const MapDispatch = null;

export default connect(MapState, MapDispatch)(GovAdmin);



// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import BeneficiaryList from './BeneficiaryList'



// class GovAdmin extends Component {
//   constructor(props){
//     super(props)
//     this.state ={

//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Government Account!!!</h1>
//         <BeneficiaryList />

//       </div>
//     )
//   }
// }
// const mapStateToProps = ({auth}) => {
//   const {user} = auth
//   return {user}
// }

// export default connect(mapStateToProps)(GovAdmin)
