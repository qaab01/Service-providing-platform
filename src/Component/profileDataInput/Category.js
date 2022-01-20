import React, { Component } from "react";
import "./category.css"
import Dropdown from 'react-bootstrap/Dropdown';
class Category extends Component {
render(){
    return(
        <div className="col-10">
            <div className="row heading"><h5>Category</h5></div>
            <div class="row shadow mb-5 bg-white rounded">
                <p>What are the main services you offer</p>
                <Dropdown>
                    <Dropdown.Toggle className="drop" variant="success">
                    Open Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        Home Page
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Logout
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="button">
                    <button  type="button" className="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>
    );
}
}
export default Category;