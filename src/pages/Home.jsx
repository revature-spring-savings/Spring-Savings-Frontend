import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import AccountNavbar from "../components/navbar/AccountNavBar";

// can delete this component; Only used to check if routing worked.
export default function Home() {
    return (
        <>
         
        <div className='page-container'>     
            <AccountNavbar /><br/><br/>      
            <Dashboard />
        </div>
        </>


    )
}