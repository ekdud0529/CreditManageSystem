import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./home";
import Manage from "./manage";

function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/manage" element={<Manage/>}></Route>
        </Routes>
    )
}

export default Pages;