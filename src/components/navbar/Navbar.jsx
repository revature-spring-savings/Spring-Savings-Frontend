import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

// when user is logged in?
export default function Navbar() {
    const location = useLocation();

    return (
        <ul className="navbar">
            <li className="left-navbar">
                <Link className={location.pathname === "/Home" ? "active" : "non-active"} to="/Home">Home</Link>
            </li>
            <li className="left-navbar">
                <Link className={location.pathname === "/Information" ? "active" : "non-active"} to="/Information">Information</Link>
            </li>
            <li id="page-title">Spring Banking</li>
            <li className="right-navbar">
                {/*When user is logged in remove logout and login*/}
                <Link className={location.pathname === "/Logout" ? "active" : "non-active"} to="/Logout">Logout</Link>
            </li>
            <li className="right-navbar">
                <Link className={location.pathname === "/Login" ? "active" : "non-active"} to="/Login">Login</Link>
            </li>
        </ul>
    )
}