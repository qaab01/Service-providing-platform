import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import SideBar from "../../Component/profileDataInput/SideBAr";
import Footer from "../../Component/welcome/Footer";
import "../../Component/profileDataInput/port.css"
import Navbar from "../../Component/profileDataInput/Navbar";
import { NavLink } from "react-router-dom";


class Portfolio extends Component {    
render(){
    return(
        <>
        <Navbar/>
            <div className="container portfolio">
                <div className="row mx-auto">
                    <SideBar/>
                    <div className="container default col-10">
                        <div className="row heading"><h5>Portfolio</h5></div>
                        <div class="row shadow mb-5 bg-white rounded">
                            <div className="container">
                                <div className="row col-7 mx-auto"><input type="text" placeholder="Project Name"/></div>
                                <div className="row col-7 mx-auto"><input type="text" placeholder="Location"/></div>
                                <div className="row col-7 mx-auto"><button  type="button" className="btn btn-primary">+ Add Image</button></div>
                            </div>
                            <div className="button">
                            <NavLink to="/rate" className="btn btn-primary Con">Continue</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}
}
export default Portfolio;