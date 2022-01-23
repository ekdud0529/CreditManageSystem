import React, {Component} from "react";
import "../stylesheets/login.css"

class InputWihtLabel extends Component{
	render(){
		return(
			<div class="int-area">
				<input type="text" name={this.props.object} id={this.props.object}
				autoComplete="off" required></input>
				<label>{this.props.object}</label>
			</div>
		);
	}
}

export default InputWihtLabel