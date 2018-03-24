import React, { Component } from 'react';
import './App.css';
import WebCam from './WebCam';
import ComplainBox from './ComplainBox';
import web3 from './web3';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  //  console.log(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <div style={{margin: 'auto'}}>
          <div style={{
                height: '140px',
                backgroundColor: '#41AD57',
                border: '1px solid white',
                marginBottom: '49px'
              }}> </div>
          <WebCam />
        </div>
      </div>
    );
  }
}
export default App;
