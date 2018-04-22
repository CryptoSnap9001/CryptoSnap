import React, {Component} from 'react'
import QrReader from 'react-qr-reader';
// import {connect} from 'react-redux';
import '../styles/Kiosk.css';

class StoreEmployee extends Component {
    // initial state
    state = {
        scanResult : ""
    }
    // handle the scanning
    handleScan = (data) => {
        if(data){
            this.setState({
                scanResult: data,
            })
        }
    }
    // handle any errors
    handleError = (err) => {
        console.error(err)
    }
    // render the page
    render() {
        return (
        <div id="kiosk">
            <h1>CryptoSNAP Store Kiosk</h1>
            <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%' }}
            />
            <p>{this.state.scanResult}</p>
        </div>
        )
    }
}

export default StoreEmployee