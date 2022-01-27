import React from "react";
import "./navbar.scss";
import Burger from "./Burger";
//import {logo} from "../../../public/assests/image/spring-savings-logos.jpg"

//Renders the navbar in both mobile and desktop
export default function Navbar() {
    return (
        <div className="nav-bar">
            <h1 className="logo">Spring Savings</h1>
            {/* <img src={logo} /> */}
            <Burger />
        </div>
    )
}