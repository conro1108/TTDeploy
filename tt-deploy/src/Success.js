import React from 'react';

const againbutton = <form action="http://google.com">
    <button type="link"> post another </button> 
        </form>;

class Success extends React.Component {
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
            <div className = "success-1">
            Success!
            </div>
            <div className = "success-2">
            Your thread of X tweets was posted sucessfully.
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

export default Success;