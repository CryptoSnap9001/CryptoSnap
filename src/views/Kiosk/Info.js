import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'

class Info extends Component {
    state = {
        price:"",
        verify:false
    }
    render() {
        if(this.state.verify){
            return <Redirect to={`/transaction/${this.props.user.uid}/${this.state.price}`} />

        }
        if(this.props.user){
            const name = this.props.user.name
            const photo = this.props.user.photo

            return (
                <MuiThemeProvider>
                <div style={{heigt:"100%",
                width:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
                }}>
                Info
                    <h1>{name}</h1>
                    <img src={photo}style={{height:400,width:300}} />
                    <p>{this.props.match.params.user_id}</p>

              <TextField
                className="price"
                value={this.state.price}
                floatingLabelText="price"
                onChange={(evt, price) => this.setState({price})}
              />

                    <RaisedButton
                primary
                label="Verify"
                onClick={() => {
                    this.setState({verify:true})
                }} />
                </div>
                </MuiThemeProvider>

                
            )
        }else{
            return (
            <div>Loading user...</div>
            )
        }

    }
}
const mapStateToProps = ({kiosk}) => {
    const {user} = kiosk
    return {user}
  }

export default connect(mapStateToProps)(Info)
