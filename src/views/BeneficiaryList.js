import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../firebase.js";
import { ActionCardMembership } from "material-ui";
import {getBalance} from '../store/user_balances'
import BeneficiaryBalance from './BeneficiaryBalance.js'
import ReactTable from "react-table";
import "react-table/react-table.css";

const database = firebase.database();
const auth = firebase.auth();

class BeneficiaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      user_balances: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user_balances) {
      console.log('updating here...')
      this.setState({
        user_balances: nextProps.user_balances
      })
    }
  }

  componentDidMount() {
    this.getMembers();
  }

  getMembers = () => {
    database
      .ref("/users/")
      .once("value")
      .then(snapshot => {
        const data = snapshot.val();
        const members = [];
        for (let key in data) {
          members.push({ ...data[key], user_id: key });
        }
        return members;
      })
      .then(members => {
        const beneficiaries = members.filter(m => m.type == 20)
        beneficiaries.forEach(b => {
          this.props.getBalance(b.user_id)
        })
        this.setState({
          members: beneficiaries
        })}
      )
      .catch(error => console.log(error));
  }
  getColumns = () => {
    return [
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Monthly Benefit',
        accessor: 'benefit',
        Cell: benefit => (
          <div>
            <p>${parseFloat(benefit.value).toFixed(2)}</p>
          </div>
        )
      },
      {
        Header: 'Account Balance',
        accessor: 'balance',
        Cell: balance => (
          <div>
            <p>{balance.value ? '$' + parseFloat(balance.value).toFixed(2) : 'Loading'}</p>
          </div>
        )
      }
    ]
  }
  getData = () => {
    if (!this.state.members.length) {
      return []
    }
    return this.state.members.map(member => {
      return {
        ...member,
        balance: this.state.user_balances[member.user_id]
      }
    })
  }
  render() {
    return (
      <div>
        <h4>SNAP Beneficiaries</h4>
        <ReactTable
          className="-striped -highlight"
          columns={this.getColumns()}
          data={this.getData()}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ auth, user_balances }) => {
  const { user } = auth;
  return { user, user_balances };
};

export default connect(mapStateToProps, {
  getBalance
})(BeneficiaryList);
