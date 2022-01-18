import React,{Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import "../stylesheets/home.css";

class Home extends Component{
    render(){
        var _content = 
        <div>
            <button className="home">이수과목관리</button>
            <button className="home">졸업시뮬레이션</button>
        </div>
        
        return(
            <div>
                <Header></Header>
                <Content content={_content}></Content>
            </div>
        );
    }
}

export default Home