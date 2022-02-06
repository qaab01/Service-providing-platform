import React, { Component } from "react";
import "./rate.css"

class Rate extends Component {
render(){
    return(
            <div className="container portfolio col-10">
                <div className="row heading"><h5>Rate</h5></div>
                <div class="row shadow mb-5 bg-white rounded">
                    <div className="container">
                        <div className="row col-7 mx-auto"><input type="text" placeholder="Project Name"/></div>
                        <div className="row col-7 mx-auto"><input type="text" placeholder="Location"/></div>
                    </div>
                    <div className="button">
                        <button  type="button" className="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
    );
}
}
export default Rate;