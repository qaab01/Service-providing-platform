import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import "./homeheader.css";
const Header =(props)=>{
    return(
      <>
        <div className="bgheader">
            <div className="text1 col-4 mx-auto">
              <h1>Welcome on Board</h1>
              <p>Find Best Contractor Or Designer In Your Area</p>
            </div>
            <div className="container">
              <div className="row d-flex justify-content-center">
              <form class="col-2">
                <select class="form-control select2">
                  <option>Looking For</option> 
                  <option>Car</option> 
                  <option>Bike</option> 
                  <option>Scooter</option> 
                  <option>Cycle</option> 
                  <option>Horse</option> 
                </select>
            </form>
                <div className="col-2">
                  <input type="text" class="form-control" id="input" placeholder="Category"/>
                </div>
                <div className="col-2">
                  <input type="text" class="form-control" id="input" placeholder="Location"/>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-1">
                  <NavLink to="/default" className="btn btn-primary Con">Search</NavLink>
                </div>
              </div>
            </div>
        </div>
      </>
    )
  }
  export default Header;