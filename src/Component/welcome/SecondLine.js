import React from 'react';

import image3 from "./pictures/join.jpg"
import image4 from "./pictures/learn.jpg"
import image5 from "./pictures/search.jpeg"
import Cards from "./Cards"
import "./cardCom.css"
const SecondLine =(props)=>{
    return(
      <>
      <div>
           
            <div className="containerCardsHeading">
                <div className="heading">
                    <h1>A community where you can find contractors, designers and companies</h1>
                </div>
            </div>
            <div className="containerCards2">
                <Cards image2={image5} line="SEARCH FOR COMMUNITY" />
                <Cards image2={image3} line="JOIN THE COMMUNITY" />
                <Cards image2={image4} line="LEARNING IN THE COMMUNITY" />
            </div>
            
        </div>
      </>
    )
  }
  export default SecondLine;