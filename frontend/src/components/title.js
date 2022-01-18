import React, {Component} from "react";

class Title extends Component{
    render(){
        return(
            <a href={this.props.url}><h2>{this.props.text}</h2></a>
        )
    }
}

export default Title;