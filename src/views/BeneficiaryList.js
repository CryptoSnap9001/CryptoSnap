import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../firebase.js";
import { ActionCardMembership } from "material-ui";
import BeneficiaryBalance from './BeneficiaryBalance.js'

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
          members.push({...data[key], user_id: key});
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
        <h4>SNAP Beneficiaries</h4>
        <ol>
          {membersList.length &&
            membersList.map(member => {
              if (member.type === 20) {
                return (
                  <li key={member.public_key}>
                    <h3>Username: {member.email}</h3>
                    <h5>Monthly benefit: {member.benefit}</h5>
                    <BeneficiaryBalance id={member.public_key} user_id={member.user_id} />
                  </li>
                );
              }
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
