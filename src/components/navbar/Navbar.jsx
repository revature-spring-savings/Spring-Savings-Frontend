import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

// when user is logged in?
export default function Navbar() {
    const location = useLocation();

    return (
        <ul className="navbar">
            <li className="left-navbar">
                <Link className={location.pathname === "/home" ? "active" : "non-active"} to="/home">Home</Link>
            </li>
            <li className="left-navbar">
                <Link className={location.pathname === "/information" ? "active" : "non-active"} to="/information">Information</Link>
            </li>
            <li id="page-title">Spring Banking</li>
            <li className="right-navbar">
                {/*When user is logged in remove logout and login*/}
                <Link className={location.pathname === "/logout" ? "active" : "non-active"} to="/logout">Logout</Link>
            </li>
            <li className="right-navbar">
                <Link className={location.pathname === "/login" ? "active" : "non-active"} to="/login">Login</Link>
            </li>
        </ul>
    )
}