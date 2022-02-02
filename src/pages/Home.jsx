import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import AccountNavbar from "../components/navbar/AccountNavBar";
import ViewAllAccounts from "../components/account/ViewAllAccounts";

// can delete this component; Only used to check if routing worked.
export function Home() {
    return (
        <>
            <AccountNavbar />
            <div className='page-container'>
                <Dashboard />
            </div>
        </>

    )
}

export const Accounts = () => {
    return (
        <>
            <AccountNavbar />
            <div className='page-container'>
                <ViewAllAccounts/>
            </div>
        </>

    )
};
