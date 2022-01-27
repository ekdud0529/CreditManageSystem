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
            isOpenModal : false,

            data : [
                {
                    course_id:"0000123123",
                    divison_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"영상처리",
                    year:"2021",
                    semester:"1",
                    credit:"3",
                    GP:"A+",
                    // key: 0,
                    id: 0
                },
                {
                    course_id:"0000123456",
                    divison_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"데이터베이스",
                    year:"2021",
                    semester:"2",
                    credit:"3",
                    GP:"A+",
                    // key: 1,
                    id: 1
                }
            ],
            searchData: [
                {
                    course_id:"0000123124",
                    divison_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"병렬분산",
                    year:"2021",
                    semester:"2",
                    credit:"3",
                    GP:"A+",
                    // key: 0,
                    id: 0
                },
                {
                    course_id:"0000123457",
                    divison_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"마이크로프로세서",
                    year:"2021",
                    semester:"1",
                    credit:"3",
                    GP:"A+",
                    // key: 1,
                    id: 1
                }
            ]
        }
    }

    openModal = () => {
        this.setState({isOpenModal : true});
    }

    closeModal = () => {
        this.setState({isOpenModal : false});
    }

    onAdd = (newData) => {
        var _data = this.state.data;
        _data.push(newData);
    }

    onDelete = (_id) => {
        var _data = this.state.data;
        var list = [];
        for(var i=0;i<_data.length;i++) {
            if(_data[i].id !== Number(_id)) {
                console.log(_data[i].id, Number(_id));
                list.push(_data[i]);
            }
        }
        console.log(list)
        this.setState({data: list})
    }

    render(){
        var _title = null;
        var _content = null;
        switch(this.props.id){
            case 1:
                _title = "이수과목관리";
                var _modalContent = <div>
                                        <Tables id={4} data={this.state.searchData}></Tables>
                                        <Tables id={5} data={this.state.searchData} onAdd={this.onAdd}></Tables>
                                    </div>;
                _content =  <Container className="manage">
                                <Tables id={1} data={this.state.data}></Tables>
                                <Tables id={2} onOpenModal={this.openModal} data={this.state.data} onDelete={this.onDelete}></Tables>
                                <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalContent} show={this.state.isOpenModal} onHide={this.closeModal}></CustomModal>
                            </Container>;
                break;
            case 2:
                _title = "졸업시뮬레이션";
                var _modalSearchContent =   <div>
                                                <Tables id={4} data={this.state.searchData}></Tables>
                                                <Tables id={5} data={this.state.searchData} onAdd={this.onAdd}></Tables>
                                            </div>;
                var _modalResultContent =   <div>
                                                <Tables id={1}></Tables>
                                            </div>;
                _content =  <Container className="manage">
                                <Tables id={3} onOpenModal={this.openModal} data={this.state.data} onDelete={this.onDelete}></Tables>
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