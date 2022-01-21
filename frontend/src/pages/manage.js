import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";

class Manage extends Component{
    render(){
        var _content = null;
        switch(this.props.id){
            case 1:
                _content =  <div>
                                <Tables id={1}></Tables>
                                <Tables id={2}></Tables>
                            </div>;
                break;
            case 2:
                _content =  <div>
                                <Tables id={3}></Tables>
                            </div>;
                break;
            default:
        }

        return(
            <div>
                <Header></Header>
                <Content content={_content}></Content>
            </div>
        );
    }
}

export default Manage;