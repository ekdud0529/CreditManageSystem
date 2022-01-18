import React, {Component} from "react";

class Content extends Component{
    render(){
        return(
            <div className="container">
                {this.props.content}
            </div>
        );
    }

}

export default Content