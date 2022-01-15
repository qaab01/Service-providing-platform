import React, { Component } from "react";
import SecondLine from '../welcome/SecondLine';
import Footer from '../welcome/Footer';
import Header from "./Header";
class HomePage extends Component {
    render(){
        return(
            <div className="content">
                <Header/>
                <SecondLine/>
                <Footer/>
            </div>
        );
    }
    }
    export default HomePage;