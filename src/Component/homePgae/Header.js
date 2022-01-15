import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./homeheader.css"
const Header =(props)=>{
    return(
      <>
        <div className="bgheader">
            <div className="col-4 mx-auto">
              <h1>Welcome on Board</h1>
              <p>Find Best Contractor Or Designer In Your Area</p>
            </div>
            
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            
        </div>
      </>
    )
  }
  export default Header;