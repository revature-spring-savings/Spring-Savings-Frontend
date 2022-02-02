import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from 'react-router-dom';
import Burger from "./Burger";
import Logo from "../../assets/logo/logo.png"
import { BankContext } from '../../Context/bank-context'

//Renders the navbar in both mobile and desktop
export default function Navbar() {
    let rightNav = useContext(BankContext);
    //console.log(rightNav);
    return (
        <div className="nav-bar">
            <div id="logo-bar">
                <Link to="/creepy"><img src={Logo} alt="logo" /></Link>
                {/* Checks if user is login, true -> dashboard || false -> landing page */}
                {rightNav.onIsLoggedIn ?
                    <Link to="/home"><h1 className="logo">Spring Savings</h1></Link>
                    :
                    <Link to="/"><h1 className="logo">Spring Savings</h1></Link>
                }
            </div>
            <Burger />
        </div>
    )
}