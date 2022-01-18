import React, {Component} from "react";
import Title from "./title"

class Header extends Component{
    render(){
        return(
            <nav>
                <div className="container">
                    <Title text="IT정보공학과 졸업 학점 관리 시스템" url="/"/>
                </div>
            </nav>
        )
    }
}

export default Header;