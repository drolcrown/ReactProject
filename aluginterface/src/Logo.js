import React, { Component } from 'react';
import logo from './logo.svg';
import './css/Logo.css';

class Logo extends Component {
    constructor(){
        super();
        this.state = {
            history: require("history").createBrowserHistory({
                // forceRefresh: true, 
            })
        };
    }

    backHome() {
        // this.state.history.push("");
        this.state.history.go(-1);
    }

    render() {
        return ( 
            <div className="textCenter" onClick={this.backHome.bind(this)}>
                <header className="logo" >
                    <img src={ logo } className="animationLogo" alt="logo"/>
                    <h1 className="title" > Alug Ja </h1> 
                </header> 
            </div>
        );
    }
}

export default Logo;