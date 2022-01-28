import ViewAllTransactions from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import AccountNavbar from '../navbar/AccountNavBar';
import IdleTime from '../IdleTime'

export default function Dashboard() {

    return (
        <div id="dashboard-container">
export default function Dashboard(){
    

            <div id="dashTitle">
                <h1 class="pageTitle">Dashboard</h1>
                <h3 class="title">Hello, User 2!</h3>
            </div>

            <div id="acctCards">
                <AccountByUserID />

            <div id="latestTransactions">
                <h3 class="title">Recent Transactions</h3>
                <ViewAllTransactions />
                <IdleTime/>
                

            </div>
        </div>
    )
    }