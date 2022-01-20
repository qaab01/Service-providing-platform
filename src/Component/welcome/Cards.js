import React from 'react';
import "./card.css"
const Cards =(props)=>{
  return(
    <>

    <div className="cardContent"> 
        <div className="img">
          <div className={props.class}></div>
        </div>
        <p>{props.line}</p>
    </div>
    </>
  )
}
export default Cards;