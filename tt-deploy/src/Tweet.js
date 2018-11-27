import React from 'react';


class Tweet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            file:''
        };
        this.handleChange =        this.handleChange.bind(this);
        this.fileHandler =        this.fileHandler.bind(this);
    } 
    handleChange(event){
        const text = event.target.value;
        this.setState({value: text});
        this.props.onChange(this.props.id, text);
    }
    fileHandler(event)  {
        this.setState({file: event.target.files[0]})
        console.log(this.state.file) 
        //axios.post('somewhere.com/file-upload', this.state.selectedFile)
    }

    render(){
        let charlimit;
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
