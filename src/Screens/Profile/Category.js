import { Navigate } from "react-router-dom";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../../Component/profileDataInput/SideBAr";
import Footer from "../../Component/welcome/Footer";
import Dropdown from 'react-bootstrap/Dropdown';
import "../../Component/profileDataInput/category.css"
import Navbar from "../../Component/profileDataInput/Navbar";


class Category extends Component {    
render(){
    return(
        <>
        <Navbar/>
            <div className="container category">
                <div className="row mx-auto">
                    <SideBar/>
                    <div className="container default col-10">
                        <div className="row heading"><h5>Category</h5></div>
                        <div class="row shadow mb-5 bg-white rounded">
                        <p>What are the main services you offer</p>
                        <Dropdown>
                            <Dropdown.Toggle className="drop" variant="success">
                            Open Menu
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                Home Page
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Logout
                            </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="button">
                            <NavLink to="/emp" className="btn btn-primary Con">Continue</NavLink>
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
export default Category;