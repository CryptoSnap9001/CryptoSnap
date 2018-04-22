import React, {Component} from 'react'
import {connect} from 'react-redux'

var QRCode = require('qrcode.react');

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
      <div>
        <h1>Beneficiary Account!!!</h1>
        <p>Balance:{this.state.balance}</p>
        <QRCode value={this.props.user.uid} />,

      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  const {user} = auth
  return {user}
}

export default connect(mapStateToProps)(Beneficiary)
