import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";
import CustomModal from "../components/customModal";

class Manage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpenModal : false
        }
    }

    openModal = () => {
        this.setState({isOpenModal : true});
    }

    closeModal = () => {
        this.setState({isOpenModal : false});
    }

    render(){
        var _title = null;
        var _content = null;
        switch(this.props.id){
            case 1:
                _title = "이수과목관리";
                _content =  <div>
                                <Tables id={1}></Tables>
                                <Tables id={2} onOpenModal={this.openModal}></Tables>
                                <CustomModal show={this.state.isOpenModal} onHide={this.closeModal}></CustomModal>
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