import { AccountByUserID } from "../account/AccountByUserID"
import  ViewAllTransactions  from '../transaction/ViewAllTransactions'
import './dashboard.scss'

export default function Dashboard(){

    return(
        <div id="dashboard-container">
            <div id="acctCards">
                <h1 class="pageTitle">View Accounts</h1>
                <AccountByUserID />
                <br/><br/>
            </div>
            {/* <div id="latestTransactions">
                <h3 class="title">view latest transactions here</h3>
                <ViewAllTransactions />
            </div> */}
        </div>
    )
}