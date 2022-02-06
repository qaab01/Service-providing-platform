import React, { Component } from "react";
import { HashRouter as Router , Routes, NavLink} from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Component/welcome/Welcome";
import HomePage from "./Component/homePgae/HomePage";
import "./App.css";
import Category from "./Screens/Profile/Category";
import Employment from "./Screens/Profile/Employment";
import Expertise from "./Screens/Profile/Expertise";
import Portfolio from "./Screens/Profile/Portfolio";
import Rate from "./Screens/Profile/Rate";
import Location from "./Screens/Profile/Location";
import Default from "./Screens/Profile/Default";
import MainF from "./Component/login/MainF";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element={< MainF />}/>
          <Route exact path="/welcome" element={< Welcome />}/>
          <Route exact path="/home" element={< HomePage />}/>
          <Route  path="/default" element={< Default />}/>
          <Route  path="/category" element={< Category />}/>
          <Route  path="/emp" element={< Employment />}/>
          <Route  path="/expert" element={< Expertise />}/>
          <Route  path="/port" element={< Portfolio />}/>
          <Route  path="/rate" element={< Rate />}/>
          <Route  path="/loc" element={< Location />}/>
          </Routes>
        
      </BrowserRouter>
    );
  }
}

export default App;
