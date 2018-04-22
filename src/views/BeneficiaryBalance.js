import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class BeneficiaryBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: ""
    };
  }

  componentDidMount() {
    this.getBalance();
  }

  getBalance = () => {
    const userId = this.props.user_id;
    axios
      .post("https://us-central1-cryptosnap-9001.cloudfunctions.net/balance", {
        user_id: userId
      })
      .then(balance => {
        this.setState({
          balance: balance.data.balance
        })
      })
      .catch(error => console.log(error))
  };

  render() {
    const balance = this.state.balance;
    return (
      <div>
        {balance ? <div>Balance: {balance}</div> : <h5>Fetching balance</h5>}
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps)(BeneficiaryBalance);
