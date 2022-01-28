import React from "react";
import "./navbar.scss";
import Burger from "./Burger";
import Logo from "../../assets/logo/logo.png"

//Renders the navbar in both mobile and desktop
export default function Navbar() {
    return (
        <div className="nav-bar">
            <div id="logo-bar">
                <img src={Logo} alt="logo" />
                <h1 className="logo">Spring Savings</h1>
            </div>
            <Burger />
        </div>
    )
}