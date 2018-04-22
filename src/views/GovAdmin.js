import React, { Component } from "react";
import { connect } from "react-redux";
import GovAddUser from "./GovAddUser";
import GovAddRetailer from "./GovAddRetailer";
import GovSelectView from "./GovSelectView";
import BeneficiaryList from './BeneficiaryList'

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
        return <h4>Default view</h4>;
      case "addUser":
        return <GovAddUser setView={this.setView} />;
      case "approveCart":
        return <h2>ApproveCart</h2>;
      case "lookupUser":
        return <BeneficiaryList setView={this.setView} />;
      case "addRetailer":
        return (
          <GovAddRetailer setView={this.setView} />
        )
    }
  }

  render() {
    return (
      <div className="Government-Main">
        <h2>Gov main!</h2>
        <GovSelectView setView={this.setView} />
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
