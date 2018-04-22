import React, {Component} from 'react';
import firebase from '../../firebase';
import '../../styles/Receipt.css';

class Receipt extends Component {

    componentWillMount() {
        this.setState({
            loading: true,
            success: true,
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

    render() {
        return (
            <div id="receipt">
                <h1>Receipt</h1>
                <div className={
                    "circle-loader " + 
                    (this.state.loading ? "" : "load-complete ") + 
                    (this.state.success ? "" : "load-failed " )
                }>
                    <div className="checkmark draw"></div>
                    <div className="x-mark">X</div>
                </div>
                <p className="message">{ this.state.message }</p>
            </div>
        )
    }
}

export default Receipt;