import React, {Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import Tables from "../components/tables";
import CustomModal from "../components/customModal";
import { Container, Form } from "react-bootstrap";
import "../stylesheets/manage.css"
import axios from "axios";

class Manage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpenSearchModal : false,
            isOpenResultModal : false,
            criteria:[],
            credit:[],
            GPA:0,
            order:[],
            data : [
                {
                    course_id:"0000123123",
                    division_name:"전공선택",
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
                    division_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"데이터베이스",
                    year:"2021",
                    semester:"2",
                    credit:"3",
                    GP:"A+",
                    // key: 1,
                    id: 1
                },
                {
                    course_id:"0000105734",
                    division_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"",
                    title:"컴퓨터구조",
                    year:"2020",
                    semester:"2",
                    credit:"3",
                    GP:"A+",
                    // key: 1,
                    id: 2
                },
                {
                    course_id:"0000105738",
                    division_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"요소설계",
                    title:"컴퓨터구조설계",
                    year:"2021",
                    semester:"2",
                    credit:"3",
                    GP:"A+",
                    // key: 1,
                    id: 3
                },
            ],
            searchData: []
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

    onAdd = (newData) => {
        let _data = this.state.data;
        let _id = _data.length===0?0:_data[_data.length-1].id+1
        if(_id !== 0){
            for(let i = 0;i<_data.length;i++){
                if(newData.course_id === _data[i].course_id && newData.year === _data[i].year && newData.semester  === _data[i].semester){
                    alert("이미 추가된 과목입니다.");
                    return;
                }
            }
        }
        newData.id = _id;
        _data.push(newData);
    }

    onDelete = (_id) => {
        var _data = this.state.data;
        var list = [];
        for(let i=0;i<_data.length;i++) {
            if(_data[i].id !== Number(_id)) {
                console.log(_data[i].id, Number(_id));
                list.push(_data[i]);
            }
        }
        console.log(list);
        this.setState({data: list});
    }

    getCriteria = () => {
        axios.post("/criteria")
        .then(function(response){
            let criteriaData = response.data;
            console.log(criteriaData);
            this.setState({criteria : criteriaData});
        }.bind(this));
    }

    getCredit = () => {
        axios.post("/credit")
        .then(function(response){
            let creditData = response.data; 
            console.log(creditData);
            this.setState({credit : creditData});
        }.bind(this));
    }

    getGPA = () => {
        axios.post("/gpa")
        .then(function(response){
            console.log(response.data);
            this.setState({GPA : response.data});
        }.bind(this));
    }

    getOrderSatisfy = () => {
        let dataList = this.state.data;
        console.log(dataList);
        axios.post("/order",dataList)
        .then(function(response){
            console.log(response.data);
            this.setState({order : response.data});
        }.bind(this));
    }

    postSearchData = async (year, semester, target_grade, division_cd, abeekStr, title) => {
        var newData = [];
        await axios.post("/manage", {
            year: year,
            semester: semester,
            target_grade: target_grade,
            division_cd: division_cd,
            abeekStr: abeekStr,
            title: title
        })
        .catch(function(error) {
            alert("error");
        })
        .then((response) => {
            console.log(response.data.length);
            var id = 0;

            for(var i=0;i<response.data.length;i++) {
                newData.push({
                    course_id: response.data[i].course_id,
                    division_name: response.data[i].division_name,
                    abeek_name: response.data[i].abeek_name,
                    title: response.data[i].title,
                    year: response.data[i].year,
                    semester: response.data[i].semester,
                    credit: response.data[i].credit,
                    GP:"",
                    id: id++
                    // key: 1,
                })
            }
            // newSearchData에 안들어감아아마암암ㅇㅇ
            // 1=1일때 어케할건지
            this.setState({
                searchData: newData
            }, console.log("newSearchData", newData))
            
        });
    }

    render(){
        var _title = null;
        var _content = null;
        switch(this.props.id){
            case 1:
                _title = "이수과목관리";
                var _modalContent = <div>
                                        <Tables id={4} pageId={this.props.id} postSearchData={this.postSearchData}></Tables>
                                        <Tables id={5} data={this.state.data} searchData={this.state.searchData} onAdd={this.onAdd}></Tables>
                                    </div>;
                _content =  <Container className="manage">
                                <Tables id={1} getCriteria={this.getCriteria} getCredit={this.getCredit} criteria={this.state.criteria}  credit={this.state.credit}></Tables>
                                <Tables id={2} onOpenSearchModal={()=>this.openModal(1)} data={this.state.data} onDelete={this.onDelete}></Tables>
                                <CustomModal dialogClassName="modal-w90" title="과목 검색" content={_modalContent} show={this.state.isOpenSearchModal} onHide={()=>this.closeModal(1)}></CustomModal>
                            </Container>;
                break;
            case 2:
                _title = "졸업시뮬레이션";
                var _modalSearchContent =   <div className="manage">
                                                <Tables id={4} pageId={this.props.id} postSearchData={this.postSearchData}></Tables>
                                                <Tables id={5} data={this.state.data} searchData={this.state.searchData} onAdd={this.onAdd}></Tables>
                                            </div>;
                var _modalResultContent =   <Form className="manage result">
                                                <Form.Group>
                                                    <Form.Label>이수현황</Form.Label>
                                                    <Tables id={1} getCriteria={this.getCriteria} getCredit={this.getCredit} criteria={this.state.criteria} credit={this.state.credit}></Tables>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>선후수 만족 여부</Form.Label>
                                                    <Tables id={6} getOrderSatisfy={this.getOrderSatisfy} order={this.state.order}></Tables>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>평균 평점</Form.Label>
                                                    <Tables id={7} getGPA={this.getGPA} GPA={this.state.GPA}></Tables>
                                                </Form.Group>
                                            </Form>;
                _content =  <Container className="manage">
                                <Tables id={3} onOpenSearchModal={()=>this.openModal(1)} onOpenResultModal={()=>this.openModal(2)} data={this.state.data} onDelete={this.onDelete}></Tables>
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