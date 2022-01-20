import React, { Component } from "react";
import { HashRouter as Router , Routes, Route, NavLink} from "react-router-dom";
import { Redirect} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Signup from "./Component/login/Signup";
import Login from "./Component/login/Login";
import Welcome from "./Component/welcome/Welcome";
import HomePage from "./Component/homePgae/HomePage";
import ProfileData from "./Component/profileDataInput/ProfileData";
import "./App.css";


class App extends Component {
  render() {
    return (
      
      <ProfileData/>
    );
  }
}

export default App;
