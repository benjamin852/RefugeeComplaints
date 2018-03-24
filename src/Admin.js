import React, { Component } from 'react';
import THead from './THead';
export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 3,
            data: [
                {id: 0,
                description: 'something...',
                accuser: 'xdhsodfh',
                violator: 'xdhsodfh',
                status: 0},
                {id: 1,
                description: 'something...',
                accuser: 'xdhsodfh',
                violator: 'xdhsodfh',
                status: 0},                
            ]
        }
    }
    
    render() {
        return (
        <div style={{ display: 'inline-flex', backgroundColor: 'white', height: '400px', borderBottom: '4px solid #545454'}}>
        <table>
            <thead style={{ fontWeight: 'bold', height: '40px', borderBottom: '4px solid #545454', }}>
                <td> Id </td>
                <td> Description </td>
                <td> Accuser </td>
                <td> Violator </td>
                <td> Status </td>
                <td> Action </td>
            </thead>
            <THead data={this.state.data} />
        </table>
        </div>);
    }
}