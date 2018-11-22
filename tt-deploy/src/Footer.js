import React, { Component } from 'react';

const contactbutton = <form action="http://google.com">
    <button type="link"> contact us </button>
        </form>;

const helpbutton = <form action="http://google.com">
    <button type="link"> help </button> 
        </form>;

class Footer extends Component {
    render() {
        return (

            <div className = "main-footer">
            <div className = "h-1">
            {helpbutton}
            </div>
            <div className = "h-2">
            <img width = "55px"
            src={require('./logo2.JPG')}
            alt='logo2' />
            </div>
            <div className = "h-5">  
            {contactbutton}
            </div>
            </div> 
        );
    }
}

export default Footer;