import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import AccountNavbar from "../components/navbar/AccountNavBar";
import { TransactionsDetail } from "../components/transaction/index";
import ViewAllAccounts from "../components/account/ViewAllAccounts";

// can delete this component; Only used to check if routing worked.
<<<<<<< HEAD
export default function Home() {

=======
export function Home() {
>>>>>>> c02db43a40652e62bfc3c75804bb88a558d00c58
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