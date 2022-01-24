import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// when user is logged in?
export default function Navbar() {
    return (
            <ul className="navbar">
                <li className="left-navbar">
                  <Link to="/Home">Home</Link>
                </li>
                <li className="left-navbar">
                    <Link to="/Information">Information</Link>
                </li>
                <li id="page-title">Spring Banking</li>
                <li className="right-navbar">
                    {/*When user is logged in remove logout and login*/}
                    <Link to="/Logout">Logout</Link>
                </li>
                <li className="right-navbar">
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
    )
}