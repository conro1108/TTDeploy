import React, { Component } from 'react';

const charactersused = <div className="b-5">
                            0/280 characters used
                        </div>;

class Tweet extends Component{
    render(){
        return(
            <div>
            <textarea type="text2" id="tweet" name="tweet">
                    </textarea>
                    <div className = "sub-body2">
                        <div className="b-4">
                            Add picture
                        </div>
            {charactersused} 
                    </div>
            </div>
        )
    }
}

export default Tweet;