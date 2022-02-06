import React, { Component } from "react";
import "./emp.css"

class Employment extends Component {
render(){
    return(
            <div className="container emp col-10">
                <div className="row heading"><h5>Employment History</h5></div>
                <div class="row shadow mb-5 bg-white rounded">
                    <div className="void"></div>
                    <div className="button">
                        <button  type="button" className="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
    );
}
}
export default Employment;