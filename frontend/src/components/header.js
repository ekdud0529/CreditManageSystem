import React, {Component} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
class Header extends Component{
	render(){
		return(
            <Navbar variant="light">
                <Container className="header">
                    <Navbar.Brand href="/"><h2 className="title">IT정보공학과 졸업 학점 관리 시스템</h2></Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/manage">이수과목관리</Nav.Link>
                        <Nav.Link href="/simulation">졸업시뮬레이션</Nav.Link>
						<Nav.Link href="/logIn">{isLogin?"로그아웃":"로그인"}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
export default Header;