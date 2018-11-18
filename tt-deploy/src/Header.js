import React, { Component } from 'react';
import LoginButton from './LoginButton'
import { Route } from 'react-router-dom';

const logo1 ={
    src:'src/logo.jpg',
    alt: 'logo',
    style:'width:70px;'   
};

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
            <img 
            src={logo1.src}
            alt={logo1.alt}
            style={logo1.width} />            
            </div>
                <div className = "h-3">Threaded Tweeter</div>
            </div>
            <div className = "sub-header2">
                <div className = "h-4">    
                     <Route exact path="/" Component={LoginButton} />
                     <Route path="/loginredirect" Component={LoggedInDisplay} />
                </div>
            </div>       
        </div>
        );
    }
}

export default Header;