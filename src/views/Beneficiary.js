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
        <h1>Beneficiary Account!!!</h1>
<<<<<<< HEAD
        <QRCode value={this.props.user.uid} size={256} />
=======
        <p>Balance:{this.state.balance}</p>
        <QRCode value={this.props.user.uid} />,

>>>>>>> 60d55d784247bdf74788d49ebad984d0baf5d878
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  const {user} = auth
  return {user}
}

export default connect(mapStateToProps)(Beneficiary)
