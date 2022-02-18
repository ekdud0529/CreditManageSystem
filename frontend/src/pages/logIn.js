import React, {Component} from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../stylesheets/login.css"
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Content from "../components/content";
import axios from "axios";

class LogIn extends Component{
	constructor(props){
		super(props);
		this.state = {
			validated: false,
			studentId: "",
			password: ""
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		if (form.checkValidity() === false){
			//e.preventDefault();
			e.stopPropagation();
		}
		this.setState({validated: true});
		
		if(this.state.studentId && this.state.password)
		{
			axios.post("/logIn", {
				studentId: this.state.studentId,
				password: this.state.password
			})
			.catch(function(error){
				alert("학번 또는 비밀번호를 다시 확인해주세요.");
			})
			.then((response) => {
				let id = response.data.studentId;
				let pw = response.data.password;

				if(id === this.state.studentId && pw === this.state.password)
				{
					window.location.href="/";
				}
				else alert("아이디 또는 비밀번호가 틀렸습니다.");
			});
		}
	};

	render(){
		var _title = "로그인";
		var _content =  <Container className="login">
							<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>학번</Form.Label>
									<Form.Control required type="text"	placeholder="학번을 입력하세요." name="studentId" value={this.state.studentId} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">학번을 입력해주세요!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4" controlId="password">
									<Form.Label>비밀번호</Form.Label>
									<Form.Control required type="password" placeholder="비밀번호를 입력하세요." name="password" value={this.state.password} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">비밀번호를 입력해주세요!</Form.Control.Feedback>
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