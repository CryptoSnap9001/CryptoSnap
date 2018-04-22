import React, {Component} from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import '../../styles/Receipt.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Redirect } from 'react-router-dom';

class Receipt extends Component {

    componentWillMount() {
        this.setState({
            loading: true,
            success: true,
            return_to_kiosk: false,
            message: ""
        })
        const curret_user_id = firebase.auth().currentUser.uid;
        const postData = {
            from: this.props.match.params.user_id, 
            to: curret_user_id, 
            amount: this.props.match.params.amount
        };
        fetch( "https://us-central1-cryptosnap-9001.cloudfunctions.net/transaction", {
            body: JSON.stringify(postData),
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( response => {
            console.log( this.setState({
                loading: false, 
                success: response.success, 
                message: response.message
            }));
        })
    }

    openKiosk = () => {
        this.setState( { return_to_kiosk: true })
    }

    render() {
        if ( this.state.return_to_kiosk ) {
            return <Redirect to={`/`} />
        }
        return (
            <MuiThemeProvider>
                <div id="receipt">
                    <h1 className="header">Transaction</h1>
                    <div className={
                        "circle-loader " + 
                        (this.state.loading ? "" : "load-complete ") + 
                        (this.state.success ? "" : "load-failed " )
                    }>
                        <div className="checkmark draw"></div>
                        <div className="x-mark">X</div>
                    </div>
                    <p className="message">{ this.state.message }</p>
                    <div className="back-to-kiosk">
                        <RaisedButton  
                            primary
                            disabled={this.state.loading}
                            label="Back To Kiosk"
                            onClick={ this.openKiosk } />
                    </div>
                    <h2> Receipt </h2>
                    <img src={this.props.receipt_url} alt="receipt" className="receipt" />
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = ( state ) => {
    return state.kiosk;
}

export default connect( mapStateToProps )(Receipt);