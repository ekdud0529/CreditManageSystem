import React, {Component} from "react";
import { Button, Container } from "react-bootstrap";
import "../stylesheets/login.css"
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Content from "../components/content";
import Form from 'react-bootstrap/Form'

class LogIn extends Component{
	render(){
		var _title = "로그인";
		var _content =  <Container className="login">
							<Form>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>학번</Form.Label>
									<Form.Control type="studentId" placeholder="학번을 입력하세요." />
								</Form.Group>

								<Form.Group className="mb-4" controlId="password">
									<Form.Label>비밀번호</Form.Label>
									<Form.Control type="password" placeholder="비밀번호를 입력하세요." />
								</Form.Group>
								
								<Container className="signUpMove">
									<Button className="mb-2" variant="primary" type="submit">로그인</Button>
									<div>
										<Link to="/signUp">회원가입</Link>
									</div>
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

export default LogIn