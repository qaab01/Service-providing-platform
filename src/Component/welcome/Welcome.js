import React, { Component } from "react";
import Header from "./Header";
import CardCom from "./CardCom";
import Footer from "./Footer";
import "./welcome.css"
class Welcome extends Component {
render(){
    return(
        <div className="content">
            <Header/>
            <CardCom/>
            <Footer/>
        </div>
    );
}
}
export default Welcome;