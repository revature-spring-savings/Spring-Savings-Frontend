import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

export default function BottomNavbar() {
    const location = useLocation();

    return (
        <ul className="bottom-navbar">
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/Accounts" ? "active" : "non-active"} to="/Accounts">Accounts</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/PayOrTransfer" ? "active" : "non-active"} to="/PayOrTransfer">Pay & transfer</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/Deposit" ? "active" : "non-active"} to="/Deposit">Deposit</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/Withdraw" ? "active" : "non-active"} to="/Withdraw">Withdraw</Link>
            </li>
        </ul>
    )
} 