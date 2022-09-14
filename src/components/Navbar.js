import React from "react";
import logo from "../images/Globe.png";



export default function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <img src={logo}/>
                <h4 className="navbarTitle">my travel journal.</h4>
            </nav>
        </div>
    );
}

