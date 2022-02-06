import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Category from "./Category";
import Default from "./Default";
import Employment from "./Employment"
import "./mainContainer.css"
import Expertise from "./Expertise";
import Portfolio from "./Portfolio";
import Location from "./Location";
import Rate from "./Rate";

class SideBar extends Component {    
render(){
    return(
        <>
            
                    <div className="container col-2">
                        <div className="row but">
                            <button onClick={()=>Navigate("/category")} type="button" className="btn btn-primary">Category</button>
                        </div>
                        <div className="row but">
                            <button type="button" className="btn btn-primary">Expertise Level</button>
                        </div>
                        <div className="row but">
                            <button type="button" className="btn btn-primary">Employment History</button>
                        </div>
                        <div className="row but">
                            <button  type="button" className="btn btn-primary">Porfolio</button>
                        </div>
                        <div className="row but">
                            <button  type="button" className="btn btn-primary">Rate</button>
                        </div><div className="row but">
                            <button  type="button" className="btn btn-primary">Location</button>
                        </div>
                        <div className="row but">
                            <button  type="button" className="btn btn-primary">Profile Photo</button>
                        </div><div className="row but">
                            <button  type="button" className="btn btn-primary">Phone Number</button>
                        </div>
                    </div>
                
            
        </>
    );
}
}
export default SideBar;