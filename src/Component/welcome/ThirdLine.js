import React from 'react';
import image2 from "./pictures/build.png";
import image3 from "./pictures/join.jpg"
import image4 from "./pictures/learn.jpg"
import Cards from "./Cards"
import "./cardCom.css"
const ThirdLine =(props)=>{
    return(
      <>
      <div>
            <div className="heading">
                <h1>A community where you can find contractors, designers and companies</h1>
            </div>
            <div className="containerCards">
                <Cards image2={image2} line="BUILD A COMMUNITY" />
                <Cards image2={image3} line="JOIN THE COMMUNITY"/>
                <Cards image2={image4} line="LEARNING IN THE COMMUNITY" />
            </div>
        </div>
      </>
    )
  }
  export default ThirdLine;