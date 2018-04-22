import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchTransactions} from '../store/transactions'
import ReactTable from "react-table";
import "react-table/react-table.css";

class GovShowTransactions extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.transactions) {
      this.props.fetchTransactions()
    }
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
  displayTable = (data) => {
    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: 'Date',
            accessor: 'purchased_at',
            Cell: purchased_at => (
              <div>
                <p>2018-04-22 5:35pm</p>
              </div>
            )
          },
          {
            Header: 'Purchaser',
            accessor: 'purchaser',
            Cell: purchaser => (
              <div>
                <p>Pat</p>
              </div>
            )
          },
          {
            Header: 'Amount',
            accessor: 'amount',
            Cell: amount => (
              <div>
                <p>$34.13</p>
              </div>
            )
          }
        ]}
      />
    )
  }
  showTransactions = () => {
    const arr = Object.keys(this.props.transactions).map(key => {
      return {
        transaction_id: key,
        ...this.props.transactions[key]
      }
    })
    if (arr && arr.length > 0) {
      return this.displayTable(arr)
    } else {
      return <p>Loading...</p>
    }
  }
  render() {
    return (
      <div style={{height: '100%', width: '100%', display: 'flex'}}>
        <h1>Transactions</h1>
        {this.showTransactions()}
      </div>
    );
  }
}

const MapState = state => {
  const {transactions} = state
  return {transactions}
}
const MapDispatch = {
  fetchTransactions
};

export default connect(MapState, MapDispatch)(GovShowTransactions);
