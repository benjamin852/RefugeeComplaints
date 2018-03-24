import React, { Component } from 'react';

export default class Thead extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this._onChange = this._onChange.bind(this);
    }
    getStatus(status) {
        switch(status) {
            case 0:
                return 'registered';
            case 1:
                return 'in progress';
            case 2:
                return 'not guilty';
            case 3:
                return 'guilty';
            default:
                return 'null';
        }
    }
    _onChange(e) {

        this.setState({
            activeValue: e.target.value,
        });
        console.log( e.target.value);
    }
    render() {
        return (
            <tbody>
            {this.props.data && this.props.data.map((row) => {
                return (<tr>
                <td> {row.id} </td>
                <td> {row.description} </td>
                <td> {row.accuser} </td>
                <td> {row.violator} </td>
                <td> {this.getStatus(row.status)} </td>
                <td> 
                    <br />
                    <select value={this.state.activeValue} onChange={this._onChange}>
                        <option value={-1}> Select an Option </option>
                        <option value={1}> In Progress </option>
                        <option value={2}> Guilty </option>
                        <option value={3}> Not Guilty </option>
                    </select>
                    <br />
                    <br />
                    <button> submit </button>
                </td>
            </tr>);
            })
            }
            </tbody>
        )
    }

}