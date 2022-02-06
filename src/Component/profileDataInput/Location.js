import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./loc.css"

class Location extends Component {
render(){
    return(
            <div className="container loc col-10">
                <div className="row heading"><h5>Location</h5></div>
                <div class="row shadow mb-5 bg-white rounded">
                    <div className="container">
                        <div className="row col-7 mx-auto"> 
                            <Dropdown>
                                <Dropdown.Toggle className="drop" variant="success">
                                Country
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    London
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    France
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    America
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="row col-7 mx-auto"> 
                            <Dropdown>
                                <Dropdown.Toggle className="drop" variant="success">
                                City
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    Paris
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Texas
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Washington DC
                                </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="button">
                        <button  type="button" className="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
    );
}
}
export default Location;