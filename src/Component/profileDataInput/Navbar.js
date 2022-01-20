import React, { Component } from "react";
import MainContainer from "./MainContainer";
import "./navbar.css";

class Navbar extends Component {
render(){
    return(
            <nav className="navbar navbar-dark navbar-expand-sm">
                <a className="navbar-brand" href="#">
                    <h3>4M</h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-list-4">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle"/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">My Account</a>
                        <a className="dropdown-item" href="#">Message</a>
                        <a className="dropdown-item" href="#">Setting</a>
                        <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>   
                    </ul>
                </div>
            </nav>
    );
}
}
export default Navbar;