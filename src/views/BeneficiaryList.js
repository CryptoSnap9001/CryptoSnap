import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../firebase.js";
import { ActionCardMembership } from "material-ui";
const database = firebase.database();
const auth = firebase.auth();

class BeneficiaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    this.getMembers();
  }

  getMembers() {
    database
      .ref("/users/")
      .once("value")
      .then(snapshot => {
        const data = snapshot.val();
        const members = [];
        for (let key in data) {
          members.push(data[key]);
        }
        return members;
      })
      .then(members => this.setState({ members }))
      .catch(error => console.log(error));
  }

  render() {
    const membersList = this.state.members;
    return (
      <div>
        <h1>SNAP Beneficiaries</h1>
        <ol>
          {membersList.length &&
            membersList.map(member => {
              return (
                <li key={member.public_key}>
                  Public Key: {member.public_key}
                </li>
              );
            })}
        </ol>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps)(BeneficiaryList);
