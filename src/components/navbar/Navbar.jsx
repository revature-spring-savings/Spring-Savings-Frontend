import React from "react";
import "./navbar.scss";
import Burger from "./Burger";

//Renders the navbar in both mobile and desktop
export default function Navbar() {
    return (
        <div className="nav-bar">
            <h1 className="logo">Spring Banking</h1>
            <Burger />
        </div>
    )
}