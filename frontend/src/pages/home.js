import React,{Component} from "react";
import Content from "../components/content";
import "../stylesheets/home.css";
import { Button, Container } from "react-bootstrap";

class Home extends Component{
    render(){
        var _content = 
        <Container className="home">
            <Button href="/manage">이수과목관리</Button>
            <Button href="/simulation">졸업시뮬레이션</Button>
        </Container>
        
        return(
            <div>
                <Content content={_content}></Content>
            </div>
        );
    }
}

export default Home