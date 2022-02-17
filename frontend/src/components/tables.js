import React, {Component} from "react";
import { Button, Form, Row, Col, Stack, Table } from "react-bootstrap";

class Tables extends Component{
    constructor(props){
        super(props);
        if(this.props.id===1){
            this.props.getCriteria();
            this.props.getCredit();
        }
        this.state = {
            // 검색 state
            year:"전체",
            semester:"전체",
            target_grade:"전체",
            division:"00",
            abeek_bsm : false,
            abeek_liberal_arts: false,
            abeek_tech: false,
            abeek_design: false,
            title:"",
            GP:"A+", // 검색화면에서 등급 선택
        }
        
    }

    combineAbeek = (bsm, liberalArts, tech, design) => {
        var abeekStr = "";
        if(bsm) {
            abeekStr = abeekStr + "01|";
        }
        if(liberalArts) {
            abeekStr = abeekStr + "02|";
        }
        if(tech) {
            abeekStr = abeekStr + "03|";
        }
        if(design) {
            abeekStr = abeekStr + "04|";
        }

        abeekStr = "regexp_like(ac.abeek_cd, \'[" + abeekStr.slice(0,-1) + "]\')";
                
        if(!bsm && !liberalArts && !tech && !design) {
            abeekStr = "1=1";
        }

        return abeekStr;
    }

    addSearchData = (newData) => {
        this.setState({
            searchData: newData
        }, console.log("addSearchData", this.state.searchData));
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, console.log(e.target.value))
    }

    handleChangeCheck = (e) => {
        this.setState({
            [e.target.name] : e.target.checked
        }, console.log(e.target.name, e.target.checked))
    }

    handleChangeGP = (e) => {
        console.log(e.target.id, e.target.value);
        let _searchData = this.state.searchData;
        _searchData[e.target.id].GP = e.target.value;
        this.setState({searchData:_searchData});
    }

    handleSearch = async (e) => {
        e.preventDefault();
        console.log("search");

        var year = this.state.year==="전체"?"1=1":"s.year=" + this.state.year;
        var semester = this.state.semester==="전체"?"1=1":"s.semester=" + this.state.semester;
        var target_grade = this.state.target_grade==="전체"?"1=1":"s.target_grade=" + this.state.target_grade;
        var division_cd = this.state.division==="00"?"1=1":"s.division_cd=" + this.state.division;
        var abeekStr = this.combineAbeek(this.state.abeek_bsm, this.state.abeek_liberal_arts, this.state.abeek_tech, this.state.abeek_design);
        var title = "c.title like \'%" + this.state.title + "%\'"
        
        await this.props.postSearchData(year, semester, target_grade, division_cd, abeekStr, title);
    }

    render(){ 
        // null로 해놓고 for문 다 case문 안으로
        // searchData: manage -> tables
        console.log(this.props.id);
        var data = null;
        var list = [];
        var _content = null;
        var _button = this.props.id===2?<Button>저장</Button>:<Button onClick={this.props.onOpenResultModal}>결과</Button>
        switch(this.props.id){
            case 1:
                _content =  this.props.criteria.length === 0 || this.props.credit.length === 0?null:
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th colSpan={5}>졸업 구분</th>
                                        <th colSpan={4}>공학인증 구분</th>
                                    </tr>
                                    <tr>
                                        <th>교양</th>
                                        <th>전공필수</th>
                                        <th>전공선택</th>
                                        <th>공필/일선</th>
                                        <th>취득학점</th>
                                        <th>BSM</th>
                                        <th>전문교양</th>
                                        <th>설계</th>
                                        <th>공학주제</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{this.props.credit[0].total}/{this.props.criteria[1].criteria_credit}({this.props.criteria[5].criteria_credit})</td>
                                        <td>{this.props.credit[5].total}/{this.props.criteria[7].criteria_credit}</td>
                                        <td>{this.props.credit[6].total}/{this.props.criteria[8].criteria_credit}</td>
                                        <td>{this.props.credit[7].total}</td>
                                        <td>{this.props.credit[10].total}/{this.props.criteria[0].criteria_credit}</td>
                                        <td>{this.props.credit[11].total}/{this.props.criteria[9].criteria_credit}</td>
                                        <td>{this.props.credit[12].total}/{this.props.criteria[10].criteria_credit}</td>
                                        <td>{this.props.credit[13].total}/{this.props.criteria[11].criteria_credit}</td>
                                        <td>{this.props.credit[17].total}/{this.props.criteria[12].criteria_credit}</td>                                        
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            case 2:         
            case 3:
                data = this.props.data;
                for(let i=0;i<data.length;i++) {
                    let abeekStr = data[i].abeek_name1 + "/" + data[i].abeek_name2;
                    list.push(
                        <tr key={i}>
                            <td>{data[i].division_name}</td>
                            <td>{abeekStr}</td>
                            <td>{data[i].title}</td>
                            <td>{data[i].year}</td>
                            <td>{data[i].semester}</td>
                            <td>{data[i].credit}</td>
                            <td>{data[i].GP}</td>
                            <td><Button id={data[i].id} variant="outline-danger" size="sm" onClick={function(e) {
                                e.preventDefault();
                                this.props.onDelete(e.target.id);
                            }.bind(this)}>삭제</Button></td>
                        </tr>
                    );
                }
                _content =  <Form>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>이수구분</th>
                                            <th>공학인증구분</th>
                                            <th>과목명</th>
                                            <th>이수년도</th>
                                            <th>이수학기</th>
                                            <th>학점</th>
                                            <th>등급</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </Table>
                                <Stack className="my-3 justify-content-center" direction="horizontal" gap={3}>
                                    <Button onClick={this.props.onOpenSearchModal}>추가</Button>
                                    {_button}
                                </Stack>
                            </Form>;
                break;
            case 4:
                var visible = null;
                if(this.props.pageId === 1) visible = true;
                else visible = false;
                _content =  <Form className="border mb-3" onSubmit={this.handleSearch}>
                                <Row className="my-3">
                                    {visible && <Form.Group as={Col} md={3}>
                                        <Form.Label>연도</Form.Label>
                                        <Form.Select onChange={this.handleChange} name="year">
                                            <option>전체</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                        </Form.Select>
                                    </Form.Group>}
                                    <Form.Group as={Col} md={3}>
                                        <Form.Label>학기</Form.Label>
                                        <Form.Select onChange={this.handleChange} name="semester">
                                            <option>전체</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md={3}>
                                        <Form.Label>학년</Form.Label>
                                        <Form.Select onChange={this.handleChange} name="target_grade">
                                            <option>전체</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="my-3">
                                    <Form.Group as={Col} md={3}>
                                        <Form.Label>이수구분</Form.Label>
                                        <Form.Select onChange={this.handleChange} name="division">
                                            <option value="00">전체</option>
                                            <option value="02">전공필수</option>
                                            <option value="03">전공선택</option>
                                            <option value="05">일반선택</option>
                                            <option value="01">교양</option>
                                            <option value="04">공통필수</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md={4}>
                                        <Form.Label>공학구분</Form.Label>
                                        <div className="border">
                                            <Form.Check inline label="BSM" name="abeek_bsm" type="checkbox" onChange={this.handleChangeCheck}/>
                                            <Form.Check inline label="전문교양" name="abeek_liberal_arts" type="checkbox" onChange={this.handleChangeCheck}/>
                                            <Form.Check inline label="공학주제" name="abeek_tech" type="checkbox" onChange={this.handleChangeCheck}/>
                                            <Form.Check inline label="설계" name="abeek_design" type="checkbox" onChange={this.handleChangeCheck}/>
                                        </div>          
                                    </Form.Group>
                                    <Col>
                                        <Form.Label column>과목명</Form.Label>
                                        <Row>
                                            <Col md={9}>
                                                <Form.Control type="text" placeholder="과목명을 입력하세요." onChange={this.handleChange} name="title"></Form.Control>
                                            </Col>    
                                            <Col>
                                                <Button type="submit">검색</Button>   
                                            </Col> 
                                        </Row>
                                    </Col>        
                                </Row>                          
                            </Form>;
                break;
            case 5:
                data = this.props.data;
                var searchData = this.props.searchData;
                for(let i=0;i<searchData.length;i++) {
                    list.push(
                        <tr key={i}>
                            <td>{searchData[i].course_id}</td>
                            <td>{searchData[i].title}</td>
                            <td>{searchData[i].division_name}</td>
                            <td>{searchData[i].abeek_name}</td>
                            <td>{searchData[i].year}</td>
                            <td>{searchData[i].semester}</td>
                            <td>{searchData[i].credit}</td>
                        <td>
                            <Form.Select aria-label="Default select example" id={i===0?"0":i} onChange={this.handleChangeGP} name="GP" size="sm">
                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="B+">B+</option>
                                <option value="B">B</option>
                                <option value="C+">C+</option>
                                <option value="C">C</option>
                                <option value="D+">D+</option>
                                <option value="D">D</option>
                                <option value="P">P</option>
                                <option value="F">F</option>
                            </Form.Select>
                        </td>
                        <td><Button id={i} variant="outline-success" size="sm" onClick={function(e) {
                            e.preventDefault();
                            this.props.onAdd(searchData[e.target.id]);
                        }.bind(this)}>추가</Button></td>
                        </tr>
                    )
                }
                _content =  <Form>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>과목코드</th>
                                            <th>과목명</th>
                                            <th>이수구분</th>
                                            <th>공학인증</th>
                                            <th>개설년도</th>
                                            <th>개설학기</th>
                                            <th>학점</th>
                                            <th>등급</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </Table>
                            </Form>
                break;
            case 6:
                _content =  <Table bordered>
                                <thead>
                                    <tr>
                                        <th>선수과목</th>
                                        <th>후수과목</th>
                                        <th>만족여부</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>디지털논리설계</td>
                                        <td className="red">논리회로설계</td>
                                        <td className="red">불만족</td>
                                    </tr>
                                    <tr>
                                        <td>창의적IT공학설계입문</td>
                                        <td>논리회로설계</td>
                                        <td className="green">만족</td>
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            case 7:
                _content =  <Table bordered>
                                <thead>
                                    <tr>
                                        <th>현재 총 평점</th>
                                        <th>예상 총 평점</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4.0</td>
                                        <td>4.2</td>
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            default:
                _content = <div>wrong id</div>;

        }
        return(
            <div>
                {_content}
            </div>
        );
    }
}

export default Tables;