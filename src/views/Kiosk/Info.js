import React, {Component} from 'react'
import {connect} from 'react-redux'

class Info extends Component {
componentDidMount(){
    this.props.match.params.user_id
}
    render() {
        if(this.props.user){
            const name = this.props.user.name
            return (
                <div>Info
                    <h1>{name}</h1>
                    <p>{this.props.match.params.user_id}</p>
                    <p>{this.props.user}</p>
                </div>
                
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
