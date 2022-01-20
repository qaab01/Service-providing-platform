import React, { Component } from "react";
import "./footer.css"
    
class Footer extends Component {    


render(){
    return(
        <>
        <div className="fheader">
            <div class="fcontainer">
                <div className="left">
                    <h1>4M</h1>
                    <br/>
                    <p>Search the world information including webpages,<br/> images, videos and more. 
                        Google has many special<br/> features to help you find exactly what you use <br/>and pay for.
                    </p>
                </div>
                <div className="right">
                    <p>About Us <br/> Contact Us <br/>Our Policies</p> <br/>
                    
                </div>
            </div>
        </div>
        </>
    );
}
}
export default Footer;