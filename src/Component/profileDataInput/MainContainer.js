import React, { Component } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Category from "./Category";
import Default from "./Default";
import "./mainContainer.css"

class MainContainer extends Component {    
render(){
    return(
        <>
        <Router basename="/">
            <div className="container">
                <div className="row mx-auto">
                    <div className="container col-2">
                        <div className="row">
                            <NavLink to="/" type="button" className="btn btn-primary">Category</NavLink>
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-primary">Expertise Level</button>
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-primary">Employment History</button>
                        </div>
                        <div className="row">
                            <button  type="button" className="btn btn-primary">Porfolio</button>
                        </div>
                        <div className="row">
                            <button  type="button" className="btn btn-primary">Rate</button>
                        </div><div className="row">
                            <button  type="button" className="btn btn-primary">Location</button>
                        </div>
                        <div className="row">
                            <button  type="button" className="btn btn-primary">Profile Photo</button>
                        </div><div className="row">
                            <button  type="button" className="btn btn-primary">Phone Number</button>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route exact="true" path="/" Component={Default}/>
                <Route path="/" Component={Category}/>
            </Routes>
        </Router>
        </>
    );
}
}
export default MainContainer;