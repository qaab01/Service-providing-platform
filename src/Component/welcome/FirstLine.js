import React from 'react';
import Cards from "./Cards"
import "./cardCom.css"
import "./card.css"
const FirstLine =(props)=>{
    return(
      <>
      <div className="main">
            <div className="heading col-7 mx-auto">
                <h1>A community where you can find contractors, designers and companies</h1>
            </div>
            <div className="containerCards">
                <Cards class="img4" line="BUILD A COMMUNITY" />
                <Cards class="img5" line="JOIN THE COMMUNITY"/>
                <Cards class="img6" line="LEARNING IN THE COMMUNITY" />
            </div>
        </div>
      </>
    )
  }
  export default FirstLine;