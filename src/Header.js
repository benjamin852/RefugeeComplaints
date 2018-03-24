import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
          <div style={{
                height: '140px',
                backgroundColor: '#41AD57',
                border: '1px solid white',
                marginBottom: '49px'
              }}>
              <h1 style={{padding: '10px'}}> Complaint Management System </h1>
              </div>
        );
    }
}