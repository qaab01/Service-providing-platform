import React from 'react';
import Cards from "./Cards"
import "./cardCom.css"
const SecondLine =(props)=>{
    return(
      <>
            <div className="main">
                <div className="heading col-7 mx-auto">
                    <h1>Easy way to find the best Contractor in your Area</h1>
                </div>
            </div>
            <div className="containerCards">
                <Cards class="img1" line="SEARCH FOR COMMUNITY" />
                <Cards class="img2" line="JOIN THE COMMUNITY" />
                <Cards class="img3" line="LEARNING IN THE COMMUNITY" />
            </div>
            
        
      </>
    )
  }
  export default SecondLine;