import React from "react";
import {Link} from 'react-router-dom';
import "./navbar.scss";
import Burger from "./Burger";
import Logo from "../../assets/logo/logo.png"

//Renders the navbar in both mobile and desktop
export default function Navbar() {
    return (
        <div className="nav-bar">
            <div id="logo-bar">
               <Link to= "/home"> <img src={Logo} alt="logo" />
                <h1 className="logo">Spring Savings</h1>
                </Link>
            </div>
            <Burger />
        </div>
    )
}