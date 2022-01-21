import React, {Component} from "react";
import { Container } from "react-bootstrap";

class Content extends Component{
    render(){
        return(
            <Container>
                {this.props.content}
            </Container>
        );
    }

}

export default Content