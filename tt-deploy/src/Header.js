import React, { Component } from 'react';
import LoginButton from './LoginButton'


class Header extends Component {
    render() {
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
                <div className = "h-3">Threaded Tweeter</div>
            </div>
            <div className = "sub-header2">
                <div className = "h-4">    
                     <LoginButton />
                </div>
            </div>       
        </div>
        );
    }
}

export default Header;