import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

export default function AccountNavbar() {
    const location = useLocation();

    return (
        <ul className="bottom-navbar">
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/accounts" ? "active" : "non-active"} to="/accounts">Accounts</Link>
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
        </ul>
    )
} 