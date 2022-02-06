import React, { Component } from "react";
import "./port.css"

class Portfolio extends Component {
render(){
    return(
            <div className="container portfolio col-10">
                <div className="row heading"><h5>Portfolio</h5></div>
                <div class="row shadow mb-5 bg-white rounded">
                    <div className="container">
                        <div className="row col-7 mx-auto"><input type="text" placeholder="Project Name"/></div>
                        <div className="row col-7 mx-auto"><input type="text" placeholder="Location"/></div>
                        <div className="row col-7 mx-auto"><button  type="button" className="btn btn-primary">+ Add Image</button></div>
                    </div>
                    <div className="button">
                        <button  type="button" className="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
    );
}
}
export default Portfolio;