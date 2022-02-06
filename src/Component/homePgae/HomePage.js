import React, { Component } from "react";
import SecondLine from '../welcome/SecondLine';
import Footer from '../welcome/Footer';
import Header from "./Header";
import Navbar from "../profileDataInput/Navbar";
class HomePage extends Component {
    render(){
        return(
            <div className="content">
                <Navbar/>
                <Header/>
                <SecondLine/>
                <Footer/>
            </div>
        );
    }
    }
    export default HomePage;