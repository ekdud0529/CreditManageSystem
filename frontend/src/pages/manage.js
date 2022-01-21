import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";

class Manage extends Component{
    render(){
        var _content = <Tables id={1}></Tables>;
        return(
            <div>
                <Header></Header>
                <Content content={_content}></Content>
            </div>
        );
    }
}

export default Manage;