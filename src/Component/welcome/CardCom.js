import React from 'react';
import FirstLine from './FirstLine';
import SecondLine from './SecondLine';
import ThirdLine from './ThirdLine';
import "./cardCom.css"
const CardCom =(props)=>{
    return(
      <>
        <div>
            <FirstLine/>
            <SecondLine/>
            <ThirdLine/>
        </div>
      </>
    )
  }
  export default CardCom;