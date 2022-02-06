import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../../Component/profileDataInput/SideBAr";
import Footer from "../../Component/welcome/Footer";
import "../../Component/profileDataInput/expert.css"
import Navbar from "../../Component/profileDataInput/Navbar";


class Expertise extends Component {    
render(){
    return(
        <>
            <Navbar/>
            <div className="container expert">
                <div className="row mx-auto">
                    <SideBar/>
                    <div className="container default col-10">
                        <div className="row heading"><h5>Expertise Level</h5></div>
                        <div className="row shadow mb-5 bg-white rounded">
                            <div className="container">
                                <div className="line row col-10 mx-auto">
                                    <p >Years of experience <input type="number" id="quantity" name="quantity" /></p>
                                </div>
                                <div className="line row col-10 mx-auto">
                                    <p >Number of Projects your done<input type="number" id="quantity" name="quantity" /></p>
                                </div>
                                <div className="line row col-10 mx-auto">
                                    <p >Number of Employees <input type="number" id="quantity" name="quantity" /></p>
                                </div>
                            </div>
                            <div className="button">
                                <NavLink to="/port" className="btn btn-primary Con">Continue</NavLink>
                                <button  type="button" className="btn btn-primary Bac">Back</button>
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
export default Expertise;