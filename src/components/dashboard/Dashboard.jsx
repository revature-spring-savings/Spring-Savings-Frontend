import ViewAllTransactions from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'
import AccountNavbar from '../navbar/AccountNavBar';

export default function Dashboard() {
    const userSession = sessionStorage.getItem("Name");
    return (
        <div id="dashboard-container">
            <div id="dashTitle">
                <h1 className="pageTitle">Dashboard</h1>
                <h3 className="title">Hello, {userSession}</h3>
            </div>
                <IdleTime/>
            <div id="acctCards">
                <AccountByUserID />
            </div>
        </div>
    )
    }