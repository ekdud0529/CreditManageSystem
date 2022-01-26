import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";
import CustomModal from "../components/customModal";
import { Container, Form } from "react-bootstrap";
import "../stylesheets/manage.css"

class Manage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpenSearchModal : false,
            isOpenResultModal : false
        }
    }

    openModal = (m) => {
        switch(m){
            case 1: 
                this.setState({isOpenSearchModal : true});
                break;
            case 2:
                this.setState({isOpenResultModal : true});
                break;
            default: break;
        }
        
    }

    closeModal = (m) => {
        switch(m){
            case 1: 
                this.setState({isOpenSearchModal : false});
                break;
            case 2:
                this.setState({isOpenResultModal : false});
                break;
            default: break;
        }
    }

    render(){
        var _title = null;
        var _content = null;
        switch(this.props.id){
            case 1:
                _title = "이수과목관리";
                var _modalContent = <div>
                                        <Tables id={4} pageId={this.props.id}></Tables>
                                        <Tables id={5}></Tables>
                                    </div>;
                _content =  <Container className="manage">
                                <Tables id={1}></Tables>
                                <Tables id={2} onOpenSearchModal={()=>this.openModal(1)}></Tables>
                                <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalContent} show={this.state.isOpenSearchModal} onHide={()=>this.closeModal(1)}></CustomModal>
                            </Container>;
                break;
            case 2:
                _title = "졸업시뮬레이션";
                var _modalSearchContent =   <div className="manage">
                                                <Tables id={4} pageId={this.props.id}></Tables>
                                                <Tables id={5}></Tables>
                                            </div>;
                var _modalResultContent =   <Form className="manage result">
                                                <Form.Group>
                                                    <Form.Label>이수현황</Form.Label>
                                                    <Tables id={1}></Tables>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>선후수 만족 여부</Form.Label>
                                                    <Tables id={6}></Tables>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>평점</Form.Label>
                                                    <Tables id={7}></Tables>
                                                </Form.Group>
                                            </Form>;
                _content =  <Container className="manage">
                                <Tables id={3} onOpenSearchModal={()=>this.openModal(1)} onOpenResultModal={()=>this.openModal(2)}></Tables>
                                <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalSearchContent} show={this.state.isOpenSearchModal} onHide={()=>this.closeModal(1)}></CustomModal>
                                <CustomModal dialogClassName="modal-w90" title="졸업시뮬레이션 결과" content={_modalResultContent} show={this.state.isOpenResultModal} onHide={()=>this.closeModal(2)}></CustomModal>
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