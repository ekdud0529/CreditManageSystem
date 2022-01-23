import React, {Component} from "react";
import { Button, Container } from "react-bootstrap";
import "../stylesheets/login.css"
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Content from "../components/content";
import Form from 'react-bootstrap/Form'

class LogIn extends Component{
	render(){
		var _title = "Login";
		var _content =  <Container className="login">
							<Form>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>Student ID</Form.Label>
									<Form.Control type="studentId" placeholder="Enter Student Id" />
								</Form.Group>

								<Form.Group className="mb-3" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Enter Password" />
								</Form.Group>
								
								<Container className="signUpMove">
									<Button variant="primary" type="submit">SignUp</Button>
									<div>
										<Link to="/signUp">Sign Up</Link>
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