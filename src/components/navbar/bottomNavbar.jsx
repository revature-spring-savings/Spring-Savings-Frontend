import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"

export default function BottomNavbar() {
    return (
        <ul className="bottom-navbar">
            <li className="left-bottomNavbar">
                <Link to="/Accounts">Accounts</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link to="/PayOrTransfer">Pay & transfer</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link to="/PayOrTransfer">Deposit</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link to="/PayOrTransfer">Withdraw</Link>
            </li>
        </ul>
    )
} 