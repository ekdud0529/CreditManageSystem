import React, {Component} from "react";
import "../stylesheets/login.css"
import { Button, Container } from "react-bootstrap";
import Header from "../components/header";
import Content from "../components/content";
import Form from 'react-bootstrap/Form'

class SignUp extends Component{
	render(){
		var _title = "SignUp";
		var _content =  <Container className="login">
							<Form>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>Student ID</Form.Label>
									<Form.Control type="studentId" placeholder="Enter Student Id" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="studentName">
									<Form.Label>Your Name</Form.Label>
									<Form.Control type="name" placeholder="Enter Your Name" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Enter Password" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="checkPassword">
									<Form.Label>Check Password</Form.Label>
									<Form.Control type="checkPassword" placeholder="Check Password" />
								</Form.Group>
								<Container className="signUpMove">
									<Button variant="primary" type="submit">
										SignUp
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