import React, { Component } from 'react';

const againbutton = <form action="http://google.com">
    <button type="link"> try again </button> 
        </form>;

class Fail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                      Bsplitting: false,
                      splitting: "off",
                      showModal: false};        
    }
    
   
    render() {
       
        return (
            <div className = "after-tweet">
            <div className = "after-tweet-header">
            <div className = "fail-1">
            Uh-oh!
            </div>
            <div className = "fail-2">
            Your thread failed to post, we tried to delete the incomplete thread, but one or more tweets may still be on your feed. Please check your feed for unfinished threads.
            </div>
            </div>
            <div className = "after-tweet-body">
            ukno
            </div>
            <div className = "after-tweet-footer">
            {againbutton}
            </div>
            <button type="button" className="notbutton" >what happened?</button>
            </div>
        );
    }
}

export default Fail;