import React, {Component} from 'react'
import Quagga from 'quagga'; 
// import {connect} from 'react-redux'

class StoreEmployee extends Component {
  state={
    scanResult : ""
  }
  componentDidMount() {
    Quagga.init({
        inputStream: {
            type : "LiveStream",
            constraints: {
                width: 640,
                height: 480,
                facing: "environment" // or user
            }
        },
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: 2,
        decoder: {
            readers : [ "code_128_reader"]
        },
        locate: true
    }, function(err) {
        if (err) {
            return console.log(err);
        }
        Quagga.start();
    });
    Quagga.onDetected((data)=>this.setState({scanResult:data.codeResult.code}));
}

componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
}


  render() {
    return (
      <div>
        <h1>StoreEmployee Account!!!</h1>
        <div id="interactive" className="viewport"/>
        <p>{this.state.scanResult}</p>

      </div>
    )
  }
}

export default StoreEmployee