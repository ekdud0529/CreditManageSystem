import React, {Component} from "react";
import "../stylesheets/login.css"
import { Button, Container } from "react-bootstrap";
import Header from "../components/header";
import Content from "../components/content";
import Form from 'react-bootstrap/Form'

class SignUp extends Component{
	render(){
		var _title = "회원가입";
		var _content =  <Container className="login">
							<Form>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>학번</Form.Label>
									<Form.Control type="studentId" placeholder="학번을 입력하세요." />
								</Form.Group>

								<Form.Group className="mb-3" controlId="studentName">
									<Form.Label>이름</Form.Label>
									<Form.Control type="name" placeholder="이름을 입력하세요." />
								</Form.Group>

								<Form.Group className="mb-3" controlId="password">
									<Form.Label>비밀번호</Form.Label>
									<Form.Control type="password" placeholder="비밀번호를 입력하세요." />
								</Form.Group>

								<Form.Group className="mb-4" controlId="checkPassword">
									<Form.Label>비밀번호 확인</Form.Label>
									<Form.Control type="checkPassword" placeholder="비밀번호를 확인하세요." />
								</Form.Group>
								<Container className="signUpMove">
									<Button variant="primary" type="submit">
										회원가입
									</Button>
								</Container>
							</Form>
						</Container>
						

		return(
			<div>
                <Header></Header>
                <Content title={_title} content={_content}></Content>
            </div>
		);
	}
}

export default SignUp