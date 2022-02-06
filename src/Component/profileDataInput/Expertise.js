import React, { Component } from "react";
import "./expert.css"
import Dropdown from 'react-bootstrap/Dropdown';
class Expertise extends Component {
render(){
    return(
            <div className="container expert col-10">
                <div className="row heading"><h5>Expertise Level</h5></div>
                <div class="row shadow mb-5 bg-white rounded">
                    <div className="container">
                        <div className="line row col-10 mx-auto">
                            <p >Years of experience <input type="number" id="quantity" name="quantity" /></p>
                        </div>
                        <div className="line row col-10 mx-auto">
                            <p >Number of Projects your done<input type="number" id="quantity" name="quantity" /></p>
                        </div>
                        <div className="line row col-10 mx-auto">
                            <p >Number of Employees <input type="number" id="quantity" name="quantity" /></p>
                        </div>
                    </div>

                    <div className="button">
                        <button  className="btn btn-primary Con">Continue</button>
                        <button  type="button" className="btn btn-primary Bac">Back</button>
                    </div>
                </div>
            </div>
    );
}
}
export default Expertise;