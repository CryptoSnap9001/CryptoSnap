import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import QrReader from 'react-qr-reader';
// import {connect} from 'react-redux';
import '../../styles/Kiosk.css';
import { fetchUser} from '../../store/kiosk'
import {connect} from 'react-redux'


class Kiosk extends Component {
    // initial state
    state = {
        scanResult : "",
        bio:""
    }
    // handle the scanning
    handleScan = (data) => {
        if(data){
            this.setState({
                scanResult: data,
            })
            this.props.fetchUser(this.state.scanResult)

        }
    }
    // handle any errors
    handleError = (err) => {
        console.error(err)
    }
    // render the page
    render() {
        if ( this.state.scanResult !== "" ) {
            return <Redirect to={`/info/${this.state.scanResult}`} />
        }
        return (
        <div id="kiosk">
            <h1>CryptoSNAP Store Kiosk</h1>
            <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%' }}
            />
        </div>
        )
    }
}
const mapStateToProps = ({kiosk}) => {
    const {user} = kiosk
    return {user}
  }


  export default connect(mapStateToProps, {
    fetchUser
  })(Kiosk)