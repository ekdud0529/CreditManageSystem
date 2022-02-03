import React, {Component} from "react";
import { Button, Form, Row, Col, Stack, Table } from "react-bootstrap";

class Tables extends Component{
    constructor(props){
        super(props);
        this.state = {
            // 검색 state
            year:"",
            semester:"",
            target_grade:"",
            division:"",
            abeek_bsm : false,
            abeek_liberal_arts: false,
            abeek_tech: false,
            abeek_design: false,
            title:"",
            GP:"A+", // 검색화면에서 등급 선택
            
            searchData: [
                {
                    course_id:"0000123124",
                    division_name:"전공선택",
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
                    division_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"마이크로프로세서",
                    year:"2021",
                    semester:"1",
                    credit:"3",
                    GP:"A+",
                    // key: 1,
                    id: 1
                },
                {
                    course_id:"0000123458",
                    division_name:"전공선택",
                    abeek_name1:"공학주제",
                    abeek_name2:"설계",
                    title:"졸프",
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
        if(e.target.id === "") this.state.searchData[0].GP = e.target.value;
        else this.state.searchData[e.target.id].GP = e.target.value;
    }

    render(){ 
        // null로 해놓고 for문 다 case문 안으로
        // searchData: manage -> tables
        var data = null;
        var _id = null;
        var list = [];
        var _content = null;
        var _button = this.props.id===2?<Button>저장</Button>:<Button onClick={this.props.onOpenResultModal}>결과</Button>
        switch(this.props.id){
            case 1:
                _content =  <Table bordered>
                                <thead>
                                    <tr>
                                        <th colSpan={5}>졸업구분</th>
                                        <th colSpan={4}>공학인증 구분</th>
                                    </tr>
                                    <tr>
                                        <th>전공필수</th>
                                        <th>전공선택</th>
                                        <th>교양</th>
                                        <th>공필/일선</th>
                                        <th>취득학점</th>
                                        <th>BSM</th>
                                        <th>전문교양</th>
                                        <th>공학주제</th>
                                        <th>설계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            case 2:         
            case 3:
                data = this.props.data;
                _id = data.length===0?0:data[data.length-1].id+1
                for(var i=0;i<data.length;i++) {
                    var abeekStr = data[i].abeek_name1 + "/" + data[i].abeek_name2;
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
                                            <th>공학인증</th>
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
                _content =  <Form className="border mb-3">
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
                                                <Button>검색</Button>   
                                            </Col> 
                                        </Row>
                                    </Col>        
                                </Row>                          
                            </Form>;
                break;
            case 5:
                data = this.props.data;
                var searchData = this.state.searchData;
                _id = data.length===0?0:data[data.length-1].id+1
                for(var i=0;i<searchData.length;i++) {
                    var abeekStr = searchData[i].abeek_name1 + "/" + searchData[i].abeek_name2;
                    list.push(
                        <tr key={i}>
                            <td>{searchData[i].course_id}</td>
                            <td>{searchData[i].title}</td>
                            <td>{searchData[i].division_name}</td>
                            <td>{abeekStr}</td>
                            <td>{searchData[i].year}</td>
                            <td>{searchData[i].semester}</td>
                            <td>{searchData[i].credit}</td>
                        <td>
                            <Form.Select aria-label="Default select example" id={i} onChange={this.handleChangeGP} name="GP" size="sm">
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
                            console.log("data[",e.target.id,"].id=",_id);
                            searchData[e.target.id].id = _id;
                            // searchData[e.target.id].GP = this.state.GP;
                            this.props.onAdd(searchData[e.target.id]);
                            _id++;
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