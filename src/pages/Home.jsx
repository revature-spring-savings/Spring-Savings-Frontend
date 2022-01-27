import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import AccountNavbar from "../components/navbar/AccountNavBar";
import { TransactionsDetail } from "../components/transaction/index";

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

                This is the Account Page<br />
                should we change this to the profile page? or settings?<br />
                move the navbar to Home page
            </div>
        </>

    )
};

export function TransactionPage() {
    return (
        <>
            <AccountNavbar />
            <div className='page-container'>
                <TransactionsDetail />
            </div>
        </>

    )
}