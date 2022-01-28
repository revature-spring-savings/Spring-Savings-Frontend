import ViewAllTransactions from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import AccountNavbar from '../navbar/AccountNavBar';

export default function Dashboard() {

    return (
        <div id="dashboard-container">

            <div id="dashTitle">
                <h1 className="pageTitle">Dashboard</h1>
                <h3 className="title">Hello, User 2!</h3>
            </div>

            <div id="acctCards">
                <AccountByUserID />
            </div>
            {/* <div id="latestTransactions">
                <h3 class="title">view latest transactions here</h3>
                <ViewAllTransactions />
            </div> */}
        </div>
    )
}