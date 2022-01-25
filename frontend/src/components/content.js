import React, {Component} from "react";
import { Container } from "react-bootstrap";

class Content extends Component{
    render(){
        return(
            <Container>
                <h4 className="title">{this.props.title}</h4>
                {this.props.content}
            </Container>
        );
    }

}

export default Content