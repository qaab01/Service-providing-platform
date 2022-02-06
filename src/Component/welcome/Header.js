import React, { Component } from "react";
import "./header.css"
import image2 from "./pictures/header.jpg"
import { NavLink } from 'react-router-dom';
class Header extends Component {    


render(){
    return(
        <>
        <div className="header">
            <div class="hcontainer">
                <div class="text">
                    <h1>
                        <strong className="brand_name">Everything is in your hands</strong>
                    </h1>
                    <p className="my-3">
                        Search the world information including webpages,<br/> images, videos and more. 
                        Google has many special<br/> features to help you find exactly what you use <br/>and pay for.
                    </p>
                    <div className="mt-3">
                        <NavLink to="/home" className="btn-get-started">Get Started</NavLink>
                    </div>
                    <br/><br/><br/>
                </div>
                <div class="image">
                    <img src={image2}/>
                </div>
            </div>
        </div>
        </>
    );
}
}
export default Header;