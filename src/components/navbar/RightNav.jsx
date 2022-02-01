import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./navbar.scss";
import Dashboard from "../../assets/icons/dashboard.png"
import Profile from "../../assets/icons/profile.png"
import Logout from "../../assets/icons/logout.png"
import Login from "../../assets/icons/login.png"
import Info from "../../assets/icons/information.png"
import { useLogin } from '../../Context/LoginProvider';
import { BankContext } from '../../Context/bank-context'

const Ul = styled.ul`
    padding-left: 1rem;
    @media (max-width: 768px) {
        transform: ${({ open }) => open ? "translatex(0)" : "translateX(100%)"}; 
    }
`;

const RightNav = ({ open }) => {
    const {
        loginUserID,
        setLoginUserID,
        loginUsername,
        setLoginUsername } = useLogin();
    let rightNav = useContext(BankContext);

    const location = useLocation();

    const handleRemoveSession = () => {
        setLoginUserID(0);
        setLoginUsername("");
        rightNav.onSetIsLoggedIn(false);
    }

    console.log(`Is the user logged in?: ${rightNav.onIsLoggedIn}`);
    console.log(`User ID: ${loginUserID}`);
    console.log(`Username: ${loginUsername}`);

    return (
        <>
            {rightNav.onIsLoggedIn ?
                <Ul open={open}>
                    <li className="label">
                        <img src={Dashboard} className="navbar-icon" alt="dashboard" />
                        <Link to="/home" className={location.pathname === "/home" ? "active" : "non-active"}>
                            Dashboard
                        </Link>
                    </li>
                    <li className="label">
                        <img src={Info} className="navbar-icon" alt="information" />
                        <Link
                            to="/information"
                            className={location.pathname === "/information" ? "active" : "non-active"}>
                            Information
                        </Link>
                    </li>
                    <li className="label">
                        <img src={Profile} className="navbar-icon" alt="profile" />
                        <Link
                            to="/profile"
                            className={location.pathname === "/profile" ? "active" : "non-active"}>
                            Profile
                        </Link>
                    </li>
                    <li className="label">
                        <img src={Logout} className="navbar-icon" alt="logout" />
                        <Link
                            to="/logout"
                            className={location.pathname === "/logout" ? "active" : "non-active"}
                            onClick={handleRemoveSession}>
                            Logout
                        </Link>
                    </li>
                </Ul>
                :
                <Ul open={open}>
                    <li className="label">
                        <img src={Login} className="navbar-icon" alt="login" />
                        <Link
                            to="/login"
                            className={location.pathname === "/login" ? "active" : "non-active"}>
                            Login
                        </Link>
                    </li>
                </Ul>
            }
        </>
    )
}

export default RightNav;
