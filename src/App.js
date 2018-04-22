import React, { Component } from 'react'
import logo from './assets/snap-no-lines.svg'
import {connect} from 'react-redux'
import {login} from './store/auth'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import {GovAdmin, Beneficiary, StoreEmployee} from './views/index'

class App extends Component {
  state = {
    email: '',
    password: ''
  }
  render() {
    const {user} = this.props
    if (user) {
      if (user.type == 10) {
        return <GovAdmin />
      } else if (user.type == 20) {
        return <Beneficiary />
      } else if (user.type == 30) {
        return <StoreEmployee />
      } else {
        return <div>Invalid</div>
      }
    }
    return (
      <MuiThemeProvider>
        <div className="App homepage">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Cryptosnap-9001!</h1>
            <div className="login-form">
              <TextField
                className="email"
                value={this.state.email}
                floatingLabelText="Email Address"
                onChange={(evt, email) => this.setState({email})}
              />
              <TextField
                className="password"
                value={this.state.password}
                floatingLabelText="Password"
                onChange={(evt, password) => this.setState({password})}
              />
              <RaisedButton
                primary
                label="Log In"
                onClick={() => {
                  const {email, password} = this.state
                  this.props.login(email, password)
                }} />
            </div>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {user} = auth
  return {user}
}

export default connect(mapStateToProps, {
  login
})(App)
