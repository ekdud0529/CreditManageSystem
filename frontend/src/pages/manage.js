import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";

class Manage extends Component{
    render(){
        var _title = null;
        var _content = null;
        switch(this.props.id){
            case 1:
                _title = "이수과목관리";
                _content =  <div>
                                <Tables id={1}></Tables>
                                <Tables id={2}></Tables>
                            </div>;
                break;
            case 2:
                _title = "졸업시뮬레이션";
                _content =  <div>
                                <Tables id={3}></Tables>
                            </div>;
                break;
            default:
        }

        return(
            <div>
                <Header></Header>
                <Content title={_title} content={_content}></Content>
            </div>
        );
    }
}

export default Manage;