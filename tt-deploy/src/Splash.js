import React, { Component } from 'react';
import LoginButton from './LoginButton'

const contactbutton = <form action="http://google.com">
    <button type="link"> contact us </button>
</form>;
const helpbutton = <form action="http://google.com">
    <button type="link"> help </button> 
</form>;
class Splash extends Component {
    render() {
        return (
            <div className = "splash-footer">
                <div className = "splash-header">

                    <div className = "splash-1">Threaded Tweeter</div>
                    </div>
                    <div className = "splash-body">
                    <div className = "splash-2">    
                    {contactbutton}
                    </div>
                    <div className = "splash-3">    
                    <LoginButton />
                    </div>
                    <div className = "splash-4">    
                    {helpbutton}
                    </div>

                </div>
            <div className = "splash-subfooter">
            <div className = "splash-5">
            An innovative tool for quick and easy threaded tweets
            </div>
            <img width = "100px"
            src={require('./logo2.JPG')}
            alt='logo2' />
                <div className = "splash-5">
            Tweet Together
            lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet lot of othe words that I havent figured out yet 
            </div> 
</div>
</div>

        );
    }
}

export default Splash;