import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./pages/pages";
import {BrowserRouter} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function App() {
	return (
		<BrowserRouter>
		  <Pages/>
		</BrowserRouter>
	);
}

export default App;
