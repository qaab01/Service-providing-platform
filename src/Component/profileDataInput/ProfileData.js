import React, { Component } from "react";
import MainContainer from "./MainContainer";
import Footer from "../welcome/Footer";
import Navbar from "./Navbar"
class ProfileData extends Component {
render(){
    return(
        <div className="content">
            <Navbar/>
            <MainContainer/>
            <Footer/>
        </div>
    );
}
}
export default ProfileData;