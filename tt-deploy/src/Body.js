import React, { Component } from 'react';
import Tweet from './Tweet';

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

class Body extends Component {
    constructor(props){
        super(props);
        this.handleaddbox = this.handleaddbox.bind(this);
        this.handleremovebox = this.handleremovebox.bind(this);
        this.state = {boxnum: 1};
    }
    handleaddbox(){
        this.setState({boxnum : this.state.boxnum + 1});
    }
    handleremovebox(){
        this.setState({boxnum : this.state.boxnum - 1});
    }
    render() {
        const boxnum = this.state.boxnum;
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
                        </button> <button className = "circlebutton" onClick = {this.handleaddbutton}>
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
                <form>
                    <Tweet />
            {button}
                    {sendtweet}
                </form>
            </div>
        </div>
        );
    }
}

export default Body;