import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import SideBar from "../../Component/profileDataInput/SideBAr";
import Footer from "../../Component/welcome/Footer";
import "../../Component/profileDataInput/emp.css"
import Navbar from "../../Component/profileDataInput/Navbar";
import { NavLink } from "react-router-dom";


class Employment extends Component {    
render(){
    return(
        <>
        <Navbar/>
            <div className="container emp">
                <div className="row mx-auto">
                    <SideBar/>
                    <div className="container default col-10">
                    <div className="row heading"><h5>Employment History</h5></div>
                        <div class="row shadow mb-5 bg-white rounded">
                            <div className="void"></div>
                            <div className="button">
                                <NavLink to="/expert" className="btn btn-primary Con">Continue</NavLink>
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
export default Employment;