import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./home";
import Manage from "./manage";
import SignUp from "./signUp";
import Header from "../components/header";
import LogIn from "./logIn";

function Pages(){
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if(sessionStorage.getItem("isLogin") === null){
			console.log('isLogin ?? :: ', isLogin);
			console.log('session ?? :: ', sessionStorage.getItem("isLogin"));
		}
		else{
			setIsLogin(true);
			console.log('isLogin ?? :: ', isLogin);
			console.log('isLogin ?? :: ', sessionStorage.getItem("isLogin"));
		}
	}, [isLogin]);

	return(
		<div>
			<Header isLogin={isLogin}></Header>
			<Routes>
				<Route path="/" element={<Home/>} exact></Route>
				<Route path="/manage" element={<Manage id={1}/>}></Route>
				<Route path="/simulation" element={<Manage id={2}/>}></Route>
				<Route path="/logIn" element={<LogIn/>} exact></Route>
				<Route path="/signUp" element={<SignUp/>} exact></Route>
			</Routes>
		</div>	
	)
}

export default Pages;