import React from 'react';

class Tweet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        };
        this.handleChange =        this.handleChange.bind(this);
    } 
    handleChange(event){
        this.setState({value: event.target.value})
    }
    render(){
        return(
        <div>
        <textarea type="text2" id="tweet" name="tweet" onChange={this.handleChange} value={this.state.value}/>
        <div className = "sub-body2">
        <div className="b-4">
        Add picture
        </div>
            <div className="b-5">
    {this.state.value.length}/280 
        </div>
        </div> 
        </div>
        )
    }
}

export default Tweet;
