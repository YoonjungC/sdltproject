import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
    <div id="header">
        <a id="website-header" href="/"> 
            <h4> Dragons Hub </h4>
        </a>
        <div className="links">  
        <Link to="/">
            <p id="link-button">Home</p>
        </Link>
        <Link to="/events">
            <p id="link-button"> Explore </p>
        </Link>
        <Link to="/faq">
            <p id="link-button">FAQ</p>
        </Link>
        </div>
    </div>
)

export default Header;




// use "default" when there are multiple functions but want to use export this function only
// use "const" when there are multiple functions that you will want to use all in another file
        // example to import: 
            // import { function1, function2 } from "filename";