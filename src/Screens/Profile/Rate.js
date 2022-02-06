import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../../Component/profileDataInput/SideBAr";
import Footer from "../../Component/welcome/Footer";
import "../../Component/profileDataInput/rate.css"
import Navbar from "../../Component/profileDataInput/Navbar";


class Rate extends Component {    
render(){
    return(
        <>
        <Navbar/>
            <div className="container rate">
                <div className="row mx-auto">
                    <SideBar/>
                    <div className="container default col-10">
                        <div className="row heading"><h5>Rate</h5></div>
                        <div class="row shadow mb-5 bg-white rounded">
                            <div className="container">
                                <div className="row col-7 mx-auto"><input type="text" placeholder="Project Name"/></div>
                                <div className="row col-7 mx-auto"><input type="text" placeholder="Location"/></div>
                            </div>
                            <div className="button">
                                <NavLink to="/loc" className="btn btn-primary Con">Continue</NavLink>
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
export default Rate;