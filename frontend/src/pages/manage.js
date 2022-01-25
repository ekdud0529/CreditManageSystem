import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";
import CustomModal from "../components/customModal";
import { Container } from "react-bootstrap";
import "../stylesheets/manage.css"

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
                var _modalContent = <div>
                                        <Tables id={4}></Tables>
                                        <Tables id={5}></Tables>
                                    </div>;
                _content =  <Container className="manage">
                                <Tables id={1}></Tables>
                                <Tables id={2} onOpenModal={this.openModal}></Tables>
                                <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalContent} show={this.state.isOpenModal} onHide={this.closeModal}></CustomModal>
                            </Container>;
                break;
            case 2:
                _title = "졸업시뮬레이션";
                var _modalSearchContent =   <div>
                                                <Tables id={4}></Tables>
                                                <Tables id={5}></Tables>
                                            </div>;
                var _modalResultContent =   <div>
                                                <Tables id={1}></Tables>
                                            </div>;
                _content =  <Container className="manage">
                                <Tables id={3} onOpenModal={this.openModal}></Tables>
                                <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalSearchContent} show={this.state.isOpenModal} onHide={this.closeModal}></CustomModal>
                            </Container>;
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