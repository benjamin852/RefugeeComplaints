import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Admin from './Admin';
import WebCam from './WebCam';
import Profile from './Profile';

export default class Main extends Component {
    render() {
        return (
            <div style={{margin: 'auto'}}>
                <Switch>
                    <Route exact path='/' component={WebCam}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </div>
        );
    }
}