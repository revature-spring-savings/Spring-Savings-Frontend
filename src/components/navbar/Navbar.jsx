import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

// when user is logged in?
export default function Navbar(props) {
    console.log(props.currentUser);

    const displayUserName = () => {
        return (
            <li>props.currentUser.first_name</li>
        )
    }
    return (
        <ul className="navbar">
            <li className="left-navbar">
                <Link to="/Home">Home</Link>
            </li>
            <li className="left-navbar">
                <Link to="/Information">Information</Link>
            </li>
            <li id="page-title">Spring Savings</li>
            <li className="right-navbar">
                {/*When user is logged in remove logout and login*/}
                <Link to="/Logout">Logout</Link>
            </li>
        </ul>
    )
}