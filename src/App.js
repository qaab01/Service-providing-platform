import React, { Component } from "react";
import { HashRouter as Router , Routes, Route, NavLink} from "react-router-dom";
import { Redirect} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Signup from "./Component/login/Signup";
import Login from "./Component/login/Login";
import Welcome from "./Component/welcome/Welcome";
import HomePage from "./Component/homePgae/HomePage";
import Logo from "./Component/login/Logo";
import image from './Pictures/login.svg';
import "./App.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <HomePage/>
      </BrowserRouter>
    );
  }
}

export default App;
