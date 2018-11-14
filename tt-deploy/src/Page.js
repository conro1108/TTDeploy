import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class Page extends Component {
    render() {
        return (
            <div class = "bodystyle">
            <Header />
            <Body />
            <Footer />
            </div>
        );
    }
}

export default Page;