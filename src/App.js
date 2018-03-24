import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
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
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}
export default App;
