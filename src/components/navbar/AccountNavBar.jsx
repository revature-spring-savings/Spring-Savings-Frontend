import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

export default function AccountNavbar() {
    const location = useLocation();

    return (
        <ul className="bottom-navbar">
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/home" ? "active" : "non-active"} to="/home">Accounts</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/create" ? "active" : "non-active"} to="/create">Create Account</Link>
            </li>
        </ul>
    )
} 