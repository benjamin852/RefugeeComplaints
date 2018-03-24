import React, { Component } from 'react';

export default class ComplainBox extends Component {
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
        return(
                <div>
                <div>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</div>

                <div>
                    <label style={{textAlign: 'left', margin: 'auto'}}>
                        Please enter your complaint:
                    </label>
                    <br />
                    <label>
                    Complaint:
                    </label>
                    <br />
                    <textarea row={3} style={{ width: '250px', height: '100px'}} value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Submit" />
                </div>
                </div>
        )
    }
}
