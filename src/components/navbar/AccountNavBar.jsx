import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

export default function AccountNavbar() {
    // State Management for scrolling
    const [visible, setVisible] = useState(true);

    // Checks for the path
    const location = useLocation();

    // Checks for the scroll by pixels (the value can be adjusted)
    const handleScroll = () => {
        if(window.scrollY > 100){
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    // Checks every time you scroll and updates the DOM, add or removes the class (scroll-nav) -> check scss file for the onScroll animation
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <ul className={`bottom-navbar ${visible && "scroll-nav"}`}>
            <div className="div-logo">Spring Savings</div>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/home" ? "active" : "non-active"} to="/home">Accounts</Link>
            </li>
            <li className="left-bottomNavbar">
                <Link className={location.pathname === "/create" ? "active" : "non-active"} to="/create">Create Account</Link>
            </li>
        </ul>
    )
} 