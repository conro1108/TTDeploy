import React, { Component } from 'react';

const autosplitting = <div className="b-1">
                        Auto splitting: off
                    </div>;

const sendtweet = <div className="b-3">
                        <input type="submit2" value="submit"/></div>;

const splittingoptions = <div className="b-2">
                        <button type="button" className="notbutton" data-toggle="modal" data-target="#exampleModal">
                            Splitting options
                        </button>
                    </div>;

const Tweets = ({boxes}) => (
<div>
    {
        boxes.map( box =>(
        <div key = {box.index}>
    <textarea type="text2" id="tweet" name="tweet">
                    </textarea>
                    <div className = "sub-body2">
                        <div className="b-4">
                            Add picture
                        </div>
            {charactersused} 
                    </div>
    </div>
        ))
    }
    </div>
)

const charactersused = <div className="b-5">
                            0/280 characters used
                        </div>;

class Body extends React.Component {
    constructor(props){
        super(props);
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        const boxnum = {index: 1};
        const boxes = [];
        boxes.push({boxnum});
        this.state = {boxes};
        
        
    }
    handleaddbox(){
        const newBoxes = this.state.boxes;
        newBoxes.push({index: newBoxes.length});
        this.setState({boxes : newBoxes});
        console.log("handleaddbox " + this.state.boxes.length);
    }
    handleremovebox(){
        const newBoxes = this.state.boxes;
        newBoxes.splice((newBoxes.length-1),1);
        this.setState({boxes : newBoxes});
        console.log("handleremovebox " + this.state.boxes.length);
    }
    render() {
        const boxes = this.state.boxes;
        const boxnum = boxes.length;
        let button;
        if(boxnum === 1){
            button = <div className = "centeronebutton">
            <button className = "circlebutton" onClick = {this.handleaddbox}>
                            +
                        </button>
            </div>
        } else{
            button = <div className = "centeronebutton">
             <button className = "circlebutton" onClick = {this.handleremovebox}>
                            -
                        </button>
            <button className = "circlebutton" onClick = {this.handleaddbox}>
                            +
                        </button>
            </div>
        }
        return (
            <div className = "main-body">
            <div className = "sub-body">
                <div className = "sub-body1">
                    {autosplitting}
                    {splittingoptions}
                </div>
<Tweets boxes={boxes}/>             
            {button}
                    {sendtweet}

            </div>
        </div>
        );
    }
}

export default Body;