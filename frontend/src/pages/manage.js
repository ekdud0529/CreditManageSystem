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
            credit:{  
                        bl:0,   //기초교양
                        kl:0,   //핵심교양
                        gl:0,   //일반교양
                        tl:0,   //교양총합
                        rm:0,   //전필
                        em:0,   //전선
                        ge:0,   //일선
                        cr:0,   //공필
                        total:0,
                        sl:0,   //전문교양
                        bsm:0,
                        eg:0,   //공학주제
                        ds:0    //설계                      
                    },
            data : [ // 리스트
            //     {
            //         course_id:"0000123123",
            //         division_name:"전공선택",
            //         abeek_name1:"공학주제",
            //         abeek_name2:"설계",
            //         title:"영상처리",
            //         year:"2021",
            //         semester:"1",
            //         credit:"3",
            //         GP:"A+",
            //         // key: 0,
            //         id: 0
            //     },
            //     {
            //         course_id:"0000123456",
            //         division_name:"전공선택",
            //         abeek_name1:"공학주제",
            //         abeek_name2:"설계",
            //         title:"데이터베이스",
            //         year:"2021",
            //         semester:"2",
            //         credit:"3",
            //         GP:"A+",
            //         // key: 1,
            //         id: 1
            //     }
            ],
            searchData: []
        }
    }

    openModal = (m) => {
        switch(m){
            case 1: 
                this.setState({isOpenSearchModal : true});
                this.postSearchData('전체', '전체', '전체', '0000', '', false, false, false, false)
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
        var _data = this.state.data;
        let _id = _data.length===0?0:_data[_data.length-1].id+1
        if(_id !== 0){
            for(let i = 0;i<_data.length;i++){;
                if(newData.course_id === _data[i].course_id && newData.year === _data[i].year && newData.semester  === _data[i].semester){
                    alert("이미 추가된 과목입니다.");
                    return;
                }
            }
        }
        newData.id = _id;
        _data.push(newData);
        this.setState({ data:_data }, console.log("data", this.state.data));
        this.calcCredit(_data);
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
        this.calcCredit(list);
    }

    onSave = () => { // 리스트 보내고 업데이트된 takes 받기
        let course_id_arr = [];
        let year_arr = [];
        let semester_arr = [];
        let gp_arr = [];
        for(let i=0;i<this.state.data.length;i++) {
            course_id_arr.push(this.state.data[i].course_id);
            year_arr.push(this.state.data[i].year);
            semester_arr.push(this.state.data[i].semester);
            gp_arr.push(this.state.data[i].gp);
        }
        console.log(course_id_arr, year_arr, semester_arr);
        axios.post("/onSave", {
            course_id_arr: course_id_arr,
            year_arr: year_arr,
            semester_arr: semester_arr,
            gp_arr: gp_arr
        })
        .catch((error) => {
            alert("error")
        })
        .then((response) => {
            console.log("onSave", this.state.data);
        })
        // let _origin = this.state.takes;
        // let _data = this.state.data;
        // let insert = [];
        // let remove = [];
        // for(var i = 0;i<_data.length;i++){
        //     var _new = true;
        //     for(var j = 0;j<_origin.length;j++){
        //         if(_data[i].course_id === _origin[j].course_id && _data[i].year === _origin[j].year && _data[i].semester === _origin[j].semester){
        //             _new = false;
        //         }
        //     }
        //     if(_new) insert.push(_data[i]);
        // }
        // for(var k = 0;k<_origin.length;k++){
        //     var _deleted = true;
        //     for(var l = 0;l<_data.length;l++){
        //         if(_origin[k].course_id === _data[l].course_id && _origin[k].year === _data[l].year && _origin[k].semester === _data[l].semester){
        //             _deleted = false;
        //         }
        //     }
        //     if(_deleted) remove.push(_origin[k]);
        // }
        // console.log("data", _data, "origin", this.state.takes);
        // console.log("insert", insert);
        // console.log("remove", remove);
    }

    calcCredit = (data) => {
        let _data = data;
        let credit = {  
                        bl:0,   //기초교양
                        kl:0,   //핵심교양
                        gl:0,   //일반교양
                        tl:0,   //교양총합
                        rm:0,   //전필
                        em:0,   //전선
                        ge:0,   //일선
                        cr:0,   //공필
                        total:0,
                        sl:0,   //전문교양
                        bsm:0,
                        eg:0,   //공학주제
                        ds:0    //설계                      
                    };
        for(let i = 0;i<_data.length;i++){
            switch(_data[i].division_name){
                case "기초교양":
                    credit.bl += 3;
                    break;
                case "핵심교양":
                    credit.kl += 3;
                    break;
                case "일반교양":
                    credit.gl += 3;
                    break;
                case "전공필수":
                    credit.rm += 3;
                    break;
                case "전공선택":
                    credit.em += 3;
                    break;
                case "일반선택":
                    credit.ge += 3;
                    break;
                case "공통필수":
                    credit.cr += 0.5;
                    break;
                default:break;
            }
            switch(_data[i].abeek_name1){
                case "전문교양":
                    credit.sl += 3;
                    break;
                case "BSM":
                    credit.bsm += 3;
                    break;
                case "공학주제":
                    credit.eg += 3;
                    break;
                case "설계":
                    credit.ds += 1;
                    break;
                default:break;
            }
            switch(_data[i].abeek_name2){
                case "전문교양":
                    credit.sl++;
                    break;
                case "BSM":
                    credit.bsm++;
                    break;
                case "공학주제":
                    credit.eg++;
                    break;
                case "설계":
                    credit.ds++;
                    break;
                default:break;
            }
        }
        credit.tl = credit.bl + credit.kl + credit.gl;
        credit.total = credit.tl + credit.rm + credit.em + credit.ge + credit.cr;
        this.setState({credit:credit});
    }

    getCriteria = () => {
        axios.post("/criteria",{admission_year:2018})
        .then(function(response){
            var criteriaData = response.data;
            this.setState({criteria : criteriaData});
        }.bind(this));    
    }

    postSearchData = async (year, semester, target_grade, division_cd, title, abeek_bsm, abeek_liberal_arts, abeek_tech, abeek_design) => {
        let newData = [];
        await axios.post("/manage", {
            year: year,
            semester: semester,
            target_grade: target_grade,
            division_cd: division_cd,
            title: title,
            abeek_bsm : abeek_bsm,
            abeek_liberal_arts: abeek_liberal_arts,
            abeek_tech: abeek_tech,
            abeek_design: abeek_design
        })
        .catch(function(error) {
            alert("error");
        })
        .then((response) => {
            console.log(response.data.length);
            var id = 0;

            for(var i=0;i<response.data.length;i++) {
                response.data[i].id  = id++;
                response.data[i].gp = "A+";
                newData.push(
                    response.data[i]
                    // {
                    // course_id: response.data[i].course_id,
                    // division_name: response.data[i].division_name,
                    // abeek_name: response.data[i].abeek_name,
                    // title: response.data[i].title,
                    // year: response.data[i].year,
                    // semester: response.data[i].semester,
                    // credit: response.data[i].credit,
                    // GP:"",
                    // id: id++
                // }
                )
            }
            // newSearchData에 안들어감아아마암암ㅇㅇ
            // 1=1일때 어케할건지
            this.setState({
                searchData: newData
            }, console.log("newSearchData", newData))
            
        });
    }

    getTakes = () => {
        console.log("getTakes")
        axios.post("/getTakes", {

        }).catch((error) => {
            alert("error")
        }).then((response) => {
            console.log(response.data);
            let newData = [];
            let id = 0;

            for(let i=0;i<response.data.length;i++) {
                response.data[i].id  = id++;
                newData.push(
                    response.data[i]
                )
            }
            this.setState({
                data: newData
            }, console.log("takes", this.state.takes))
        })
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
                                <Tables id={1} getCriteria={this.getCriteria} calcCredit={()=>this.calcCredit(this.state.data)} criteria={this.state.criteria}  credit={this.state.credit}></Tables>
                                <Tables id={2} onOpenSearchModal={()=>this.openModal(1)} data={this.state.data} onDelete={this.onDelete} getTakes={this.getTakes} onSave={this.onSave}></Tables>
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
                                                    <Tables id={1} getCriteria={this.getCriteria} calcCredit={()=>this.calcCredit(this.state.data)} criteria={this.state.criteria} credit={this.state.credit}></Tables>
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
                                <Tables id={3} onOpenSearchModal={()=>this.openModal(1)} onOpenResultModal={()=>this.openModal(2)} data={this.state.data} onDelete={this.onDelete} getTakes={this.getTakes}></Tables>
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