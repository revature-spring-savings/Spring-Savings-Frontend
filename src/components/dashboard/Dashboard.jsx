import ViewAllTransactions from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'
import AccountNavbar from '../navbar/AccountNavBar';

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <div id="dashTitle">
                <h1 class="pageTitle">Dashboard</h1>
                <h3 class="title">Hello, User 2!</h3>
            </div>
                <IdleTime/>
            <div id="acctCards">
                <AccountByUserID />
            </div>
        </div>
    )
    }