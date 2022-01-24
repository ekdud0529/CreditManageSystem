import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./home";
import Manage from "./manage";
import LogIn from "./logIn"
import SignUp from "./signUp";

function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/manage" element={<Manage id={1}/>}></Route>
            <Route path="/simulation" element={<Manage id={2}/>}></Route>
			<Route path="/logIn" element={<LogIn/>} exact></Route>
			<Route path="/signUp" element={<SignUp/>} exact></Route>
        </Routes>
    )
}

export default Pages;