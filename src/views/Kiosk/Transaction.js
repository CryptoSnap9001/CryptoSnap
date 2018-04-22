import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'



class Transaction extends Component {
    state={
        product:"",
        price:""
    }
    render() {
        return (
            <MuiThemeProvider>
                <h5>Transaction</h5>

          </MuiThemeProvider>
        )
    }
}

export default Transaction;