import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div>

        <div>
          Please enter your complaint:
        </div>

        <div>
          <label>
            Complaint:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </div>

      </div>
    );
  }
}
export default App;
