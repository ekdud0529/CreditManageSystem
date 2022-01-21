import React, {Component} from "react";
import { Button, Form, Stack, Table } from "react-bootstrap";

class Tables extends Component{
    render(){
        var _content = null;
        var _button = this.props.id===2?<Button>저장</Button>:<Button>결과</Button>
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
                        <tr>
                            <td>전공선택</td>
                            <td>공학주제/설계</td>
                            <td>데이터베이스</td>
                            <td>2021</td>
                            <td>2</td>
                            <td>3</td>
                            <td>A+</td>
                            <td><Button variant="outline-danger" size="sm">삭제</Button></td>
                        </tr>
                        <tr>
                            <td>전공선택</td>
                            <td>공학주제/설계</td>
                            <td>병렬분산시스템</td>
                            <td>2021</td>
                            <td>2</td>
                            <td>3</td>
                            <td>A+</td>
                            <td><Button variant="outline-danger" size="sm">삭제</Button></td>
                        </tr>
                    </tbody>
                </Table>
                <Stack className="my-3 justify-content-center" direction="horizontal" gap={3}>
                    <Button>추가</Button>
                    {_button}
                </Stack>
            </Form>
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