import React, {Component} from 'react'
import {connect} from 'react-redux'

var QRCode = require('qrcode.react');

class Beneficiary extends Component {
  render() {
    return (
      <div>
        <h1>Beneficiary Account!!!</h1>
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
