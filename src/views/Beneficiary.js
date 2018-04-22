import React, {Component} from 'react'
import {connect} from 'react-redux'
import QRCode from 'qrcode.react';
import '../styles/Beneficiary.css';

class Beneficiary extends Component {
  render() {
    return (
      <div id="benificiary">
        <h1>Beneficiary Account!!!</h1>
        <QRCode value={this.props.user.uid} size={256} />
      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  const {user} = auth
  return {user}
}

export default connect(mapStateToProps)(Beneficiary)
