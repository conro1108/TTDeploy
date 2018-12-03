import React from 'react';
import axios from 'axios';


class Tweet extends React.Component{
    constructor(props){
        super(props);
        
        let init_val = ''

        if (this.props.value === undefined) {
            init_val = '';
        }
        else{
            init_val = this.props.value;
        }
        this.state = {
            value:init_val,
            file:''
        };
        this.handleChange =        this.handleChange.bind(this);
        this.fileHandler =        this.fileHandler.bind(this);
    } 
    handleChange(event){
        const text = event.target.value;
        this.setState({value: text});
        this.props.onChange("tweet"+this.props.id, text);
    }
    fileHandler(event)  {
        this.setState({file: event.target.files[0]});
        const upload = event.target.files[0];
        console.log(upload); 
        let postData = this.props.uploadData;
        postData = Object.assign({'file': event.target.files[0]}, postData);
        console.log(postData);
        //this.props.onUpload("media"+this.props.id, upload);

        axios.post(this.props.uploadUrl, postData).then(
            response => {
                console.log(response);
                this.props.onUpload("media"+this.props.id, response.data.location);
            }
        )
    }

    render(){
        let charlimit;
        console.log(this.state.value)
        if(this.state.value.length <= 280){
            charlimit = <div className="b-5">
                        {this.state.value.length}/280 
                        </div>
        }
        else {
            charlimit = <div className="b-5-red">
                        {this.state.value.length}/280 
                        </div>
        }
        
        return(
        <div>
        <textarea type="text2" id="tweet" name="tweet" onChange={this.handleChange} value={this.state.value}/>
        <div className = "sub-body2">
        
        <div className="b-4"><input type="file" onChange={this.fileHandler}/></div>
            {charlimit}
        </div> 
        </div>
        )
    }
}


export default Tweet;
