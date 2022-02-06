import React, { Component } from "react";
import { HashRouter as Router , Routes, Route, NavLink} from "react-router-dom";
import { Redirect} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import image from "./sign.jpg"
import "./main.css";


class MainF extends Component {
  render() {
    return (
      
        <div className="App">
          <div className="appAside">
          <img src={image} className="img" alt="common-pic"/>
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact='true'
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact='true'
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
            <Routes>
            <Route exact='true' path="/" element={<Signup/>} />
            <Route path="/sign-in" element={<Login/>} />
            </Routes>
          </div>
        </div>
    );
  }
}

export default MainF;
