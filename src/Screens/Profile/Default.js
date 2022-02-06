import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import SideBar from "../../Component/profileDataInput/SideBAr";
import Footer from "../../Component/welcome/Footer";
import "../../Component/profileDataInput/default.css"
import Navbar from "../../Component/profileDataInput/Navbar";
import { NavLink } from "react-router-dom";


class Default extends Component {    
render(){
    return(
        <>
        <Navbar/>
            <div className="container default">
                <div className="row mx-auto">
                    <SideBar/>
                    <div className="container default col-10">
                        <div className="row img"></div>
                            
                        <div class="row shadow p-3 mb-5 bg-white rounded">
                            <h5>Join Us<br/><br/></h5>
                            <p>Hi Darin, <br/><br/> Thanks for your interest in Crowd as the world's largest talent platform, we connect millions of bussinesses with independent contractor and designer like you</p>
                            <p className="bold">To get started, all you need to do is to fill out a profile.</p>
                            <div className="button">
                                <NavLink to="/category" className="btn btn-primary Con">Continue</NavLink>
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
export default Default;