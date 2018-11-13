import React, { Component } from 'react';

const contactbutton = <form action="http://google.com">
    <input type="link" value="contact us"/>
        </form>;

const helpbutton = <form action="http://google.com">
    <input type="link" value="help"/> 
        </form>;

const logo2 ={
    src:'src/logo2.jpg',
    alt: 'logo2',
    style:'width:55px;'   
};

class Footer extends Component {
    render() {
        return (

            <div className = "main-footer">
            <div className = "h-1">
            {helpbutton}
            </div>
            <div className = "h-2">
            <img 
            src={logo2.src}
            alt={logo2.alt}
            style={logo2.width} />
            </div>
            <div className = "h-5">  
            {contactbutton}
            </div>
            </div> 
        );
    }
}

export default Footer;