import React, {Component} from "react";
import "../stylesheets/login.css"
import { Button, Container, Form } from "react-bootstrap";
import Header from "../components/header";
import Content from "../components/content";
import axios from 'axios';

class SignUp extends Component{
	constructor(props){
		super(props);
		this.state = {
			validated: false,
			studentId: "",
			studentName: "",
			password: "",
			checkPassword: ""
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
		
		console.log(e.target.name);
		console.log(e.target.value);
	}

	handleSubmit = (e) => {
		// 입력 여부 확인
		const form = e.currentTarget;
		if (form.checkValidity() === false){
			e.preventDefault(); //제출 시 새로고침 방지
			e.stopPropagation();
		}
		this.setState({validated: true});
		
		// 비밀번호 확인
		if(this.state.password === this.state.checkPassword)
		{
			if(this.state.studentId && this.state.studentName && this.state.password)
			{	
				axios.post("/signUp", {
							studentId: this.state.studentId,
							name: this.state.studentName,
							password: this.state.password
						})
						.catch(function(error){
							alert("이미 존재하는 학번입니다.");
						})
						// then -> post 후 과정
						.then(function(response){ // response -> 스프링에서 받아온 데이터
							console.log(response.date); //-> 데이터를 사용하기 위해선 뒤에 .data 붙여야함
							alert("회원가입 성공");
						});
			}
			else
				alert("회원가입 실패");	
		}
		else
		{
			alert("비밀번호를 확인해주세요.");
		}
	};

	render(){
		var _title = "회원가입";
		var _content =  <Container className="login">
							<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>학번</Form.Label>
									<Form.Control required type="text" placeholder="학번을 입력하세요." name="studentId" value={this.state.studentId} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">학번을 입력해주세요!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="studentName">
									<Form.Label>이름</Form.Label>
									<Form.Control required type="text" placeholder="이름을 입력하세요." name="studentName" value={this.state.studentName} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">이름을 입력해주세요!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="password">
									<Form.Label>비밀번호</Form.Label>
									<Form.Control required type="password" placeholder="비밀번호를 입력하세요." name="password" value={this.state.password} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">비밀번호 입력해주세요!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4" controlId="checkPassword">
									<Form.Label>비밀번호 확인</Form.Label>
									<Form.Control required type="password" placeholder="비밀번호를 확인하세요." name="checkPassword" value={this.state.checkPassword} onChange={this.handleChange}/>
									<Form.Control.Feedback type="invalid">비밀번호를 입력해주세요!</Form.Control.Feedback>
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