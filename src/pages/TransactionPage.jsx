import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import AccountNavbar from "../components/navbar/AccountNavBar";
import ViewAllTransactionsByUserID from "../components/transaction/ViewAllTransactionsByUserID";
import { TransactionsDetail } from "../components/transaction/index";

// can delete this component; Only used to check if routing worked.
export default function TransactionPage() {
    return (
        <>
         
        <div className='page-container'>     
        <AccountNavbar /><br/><br/>   

        <TransactionsDetail />
            
        </div>
        </>


    )
}