import ViewAllTransactions from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'
import AccountNavbar from '../navbar/AccountNavBar';
import { useAuth0 } from '@auth0/auth0-react';

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <div id="dashTitle">
                <h1 className="pageTitle">Dashboard</h1>
                <h3 className="title">Hello, User 2!</h3>
            </div>
                <IdleTime/>
            <div id="acctCards">
                <AccountByUserID />
            </div>
        </div>
    )
    }