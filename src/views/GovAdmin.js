import React, {Component} from 'react'
import {connect} from 'react-redux'
import BeneficiaryList from './BeneficiaryList'



class GovAdmin extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render() {
    return (
      <div>
        <h1>Government Account!!!</h1>
        <BeneficiaryList />

      </div>
    )
  }
}
const mapStateToProps = ({auth}) => {
  const {user} = auth
  return {user}
}

export default connect(mapStateToProps)(GovAdmin)
