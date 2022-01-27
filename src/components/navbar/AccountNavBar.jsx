import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

export default function AccountNavbar() {
    const location = useLocation();

    return (
        <ul className="bottom-navbar">
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/profile" ? "active" : "non-active"} to="/profile">Profile</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/pay-or-transfer" ? "active" : "non-active"} to="/pay-or-transfer">Pay & transfer</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/deposit" ? "active" : "non-active"} to="/deposit">Deposit</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/withdraw" ? "active" : "non-active"} to="/withdraw">Withdraw</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/create" ? "active" : "non-active"} to="/create">Create Account</Link>
            </li>
        </ul>
    )
} 