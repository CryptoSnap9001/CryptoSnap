import React, {Component} from 'react'
import {connect} from 'react-redux'
import QRCode from 'qrcode.react';
import '../styles/Beneficiary.css';

class Beneficiary extends Component {
  state={
    balance:""
  }
  componentDidMount(){
    fetch("https://us-central1-cryptosnap-9001.cloudfunctions.net/balance",{
      body: JSON.stringify({ "user_id": this.props.user.uid }),
      method:'POST',
      mode:'cors',
      headers:{
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ balance: data.balance }));

  }
  render() {
    return (
      <div id="benificiary">
        <h1>${parseFloat(this.state.balance).toLocaleString()}</h1>
        <div className="flex">
          <QRCode value={this.props.user.uid} size={256} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  const {user} = auth
  return {user}
}

export default connect(mapStateToProps)(Beneficiary)
