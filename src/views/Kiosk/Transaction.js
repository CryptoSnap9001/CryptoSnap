import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {setReceiptURL} from '../../store/kiosk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import Webcam from 'react-webcam'
import firebase from '../../firebase'

class Transaction extends Component {
    state={
        product:"",
        price:"",
        uploading: false,
        finished: false
    }
    render() {
        if (this.state.finished) {
            const {amount, user_id} = this.props.match.params
            return <Redirect to={`/receipt/${user_id}/${amount}`} />
        }
        return (
            <MuiThemeProvider id="transaction">
                <h1 className="header">Receipt</h1>
                <p className="warning">Please take a photo of your receipt for verification</p>
                <Webcam
                    audio={false}
                    screenshotFormat="image/png"
                    ref={cameraRef => {
                        this.cameraRef = cameraRef
                    }}
                />
                <div className="back-to-kiosk">
                    <RaisedButton
                        primary
                        disabled={this.state.uploading}
                        label="Save Receipt"
                        onClick={() => {
                            var contentType = 'image/png'

                            this.setState({uploading: true})
                            const imageSrc = this.cameraRef.getScreenshot()
                            let thePath = getRandomNumber() + '.png'
                            var storageRef = firebase.storage().ref(`receipts/${thePath}`)
                            storageRef.putString(imageSrc, 'data_url').then(snapshot => {
                                this.props.setReceiptURL(snapshot.downloadURL)
                                this.setState({uploading: false, finished: true})
                            }).catch(err => {
                                alert('An error occurred while uploading: ' + err)
                                this.setState({uploading: false})
                            })
                        }}
                    />
                </div>
          </MuiThemeProvider>
        )
    }
}

function getRandomNumber() {
    return parseInt(Math.random() * 50000)
}

export default connect(null, {
    setReceiptURL
})(Transaction)