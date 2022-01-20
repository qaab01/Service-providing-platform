import React from 'react';
import Cards from "./Cards"
import "./cardCom.css"
const ThirdLine =(props)=>{
    return(
      <>
            <div className="main">
              <div className="heading col-7 mx-auto">
                  <h1>A way to Learn and Excel your Skills</h1>
              </div>
            </div>
            <div className="containerCards">
                <Cards class="img7" line="BUILD A COMMUNITY" />
                <Cards class="img8" line="JOIN THE COMMUNITY"/>
                <Cards class="img9" line="LEARNING IN THE COMMUNITY" />
            </div>
        
      </>
    )
  }
  export default ThirdLine;