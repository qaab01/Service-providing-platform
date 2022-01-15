import React from 'react';
import "./card.css"
import Card from "react-bootstrap/Card";
const Cards =(props)=>{
  return(
    <>
    
    <div className="cardContent"> 
        <div className="img">
            <Card class="card border-secondary mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image2}/>
            </Card>
        
        <br></br>
        </div>
        <p>{props.line}</p>
    </div>
    </>
  )
}
export default Cards;