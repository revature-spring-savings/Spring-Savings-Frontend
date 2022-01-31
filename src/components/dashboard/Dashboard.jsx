import ViewAllTransactions from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'
import AccountNavbar from '../navbar/AccountNavBar';
import { useEffect } from 'react';




export default function Dashboard() {

        if(sessionStorage.getItem('userID') != 0){
            let username = sessionStorage.getItem("name");
            document.getElementById("title").innerHTML = `Hello, ${username}`;
        }

    return (
        <div id="dashboard-container">
            <div id="dashTitle">
                <h1 className="pageTitle">Dashboard</h1>
                <h3 className="title"></h3>
            </div>
                <IdleTime/>
            <div id="acctCards">
                <AccountByUserID />
            </div>
        </div>
    )
    }