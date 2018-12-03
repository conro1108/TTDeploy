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
        //postData = Object.assign({'file': event.target.files[0]}, postData);
        console.log(postData);
        let formdata = new FormData();
        for(const field in postData){
            formdata.append(field, postData[field])
        }
        formdata.append("file", event.target.files[0]); 
        /*
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        */
        //this.props.onUpload("media"+this.props.id, upload);
        /*
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.props.uploadUrl);
        xhr.send(formdata);
        */
        //const header = {'Content-Type': 'multipart/form-data'};
        
        axios.post(this.props.uploadUrl, formdata).then(
            response => {
                console.log(response);
                
                this.props.onUpload("media"+this.props.id, this.props.uploadUrl+postData['key'].slice(0,-11)+upload.name);
            }, 
            error => {
                console.log(error);
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
