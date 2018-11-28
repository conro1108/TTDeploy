import React, { Component } from 'react';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';


class Header extends Component {
    constructor(props){
    super(props);}
    render() {
        console.log(this.props.username + ", " + this.props.resourceOwnerSecretCookie + ", " + this.props.resourceOwnerKeyCookie + ", " + this.props.loginUrl + ", " + this.props.isLoggedIn);
        return (
            <div className = "main-header">
            <div className = "sub-header1">
                <div className = "h-1">
                    <div>
                        Tweet 
                    </div>
                    <div>
                        Together
                    </div>
                </div>
                <div className = "h-2">
            <img width = "70px"
            src={require('./logo.JPG')}
            alt='logo' />            
            </div>
                <div className = "h-3" onClick = {this.props.handleHome}>Threaded Tweeter</div>
            </div>
            <div className = "sub-header2">
                <div className = "h-4">    
                    
                        <Login checkLoginStatus = {this.props.checkLoginStatus} componentDidMount = {this.props.componentDidMount} logout = {this.props.logout} loginUrl = {this.props.loginUrl} resourceOwnerKeyCookie = {this.props.resourceOwnerKeyCookie} resourceOwnerSecretCookie = {this.props.resourceOwnerSecretCookie} username = {this.props.username} isLoggedIn = {this.state.isLoggedIn}/>
                    
                </div>
            </div>       
        </div>
        );
    }
}

export default Header;