import React, { Component } from 'react';

class LoggedInDisplay extends Component {
    constructor () {
        super()
        this.state = {
            queryString : ""
        }        
    }

    componentDidMount() {
        this.setState(
            {queryString : this.props.location.search}
        )
    }

    render() {
        return (
            <div className="loged_in_display">
                {this.state.queryString}
            </div>
        )
    }
}

export default LoggedInDisplay;