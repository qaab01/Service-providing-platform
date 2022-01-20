import React, { Component } from "react";
import "./default.css"
class Default extends Component {
render(){
    return(
        <div className="col-10">
                        <div className="row img">
                        </div>
                        <div class="row shadow p-3 mb-5 bg-white rounded">
                            <h5>Join Us<br/><br/></h5>
                            <p>Hi Darin, <br/><br/> Thanks for your interest in Crowd as the world's largest talent platform, we connect millions of bussinesses with independent contractor and designer like you</p>
                            <p className="bold">To get started, all you need to do is to fill out a profile.</p>
                            <div className="button">
                                <button  type="button" className="btn btn-primary">Continue</button>
                            </div>
                        </div>
                    </div>
    );
}
}
export default Default;