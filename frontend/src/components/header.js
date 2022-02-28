import React, {Component} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import axios from "axios";

class Header extends Component{

	onLogout = () => {
		sessionStorage.removeItem('isLogin');
		console.log('In header isLogin ?? :: ', sessionStorage.getItem("isLogin"));
		axios.get("/logout");
		window.location.href="/";
	};

	render(){
		return(
            <Navbar variant="light">
                <Container className="header">
                    <Navbar.Brand href="/"><h2 className="title">IT정보공학과 졸업 학점 관리 시스템</h2></Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/manage">이수과목관리</Nav.Link>
                        <Nav.Link href="/simulation">졸업시뮬레이션</Nav.Link>
						{(sessionStorage.getItem("isLogin") === null) ?
							<Nav.Link href="/logIn">로그인</Nav.Link> :
							<Nav.Link href="/" onClick={this.onLogout}>로그아웃</Nav.Link>
						}
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
export default Header;