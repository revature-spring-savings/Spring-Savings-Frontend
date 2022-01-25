import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./navbar.scss";

const Ul = styled.ul`
    padding-left: 1rem;
    @media (max-width: 768px) {
        transform: ${({ open }) => open ? "translatex(0)" : "translateX(100%)"}; 
    }
`;

const RightNav = ({ open }) => {
    const location = useLocation();
    return (
        <Ul open={open}>
            <li className="label">
                <Link to="/home" className={location.pathname === "/home" ? "active" : "non-active"}>
                    Home
                </Link>
            </li>
            <li className="label">
                <Link
                    to="/information"
                    className={location.pathname === "/information" ? "active" : "non-active"}>
                    Information
                </Link>
            </li>
            <li className="label">
                <Link
                    to="/accounts"
                    className={location.pathname === "/accounts" ? "active" : "non-active"}>
                    Accounts
                </Link>
            </li>
            <li className="label">
                <Link
                    to="/logout"
                    className={location.pathname === "/logout" ? "active" : "non-active"}>
                    Logout
                </Link>
            </li>
        </Ul>
    )
}

export default RightNav;
