import  ViewAllTransactions  from '../components/transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'


export default function Dashboard(){

    return(
        <>
            <div id="acctCards">
                <h1 class="pageTitle">Dashboard</h1>
                <h3 class="title">Hello, User 2!</h3>
                <AccountByUserID />
                <br/><br/>
            </div>
            <div id="latestTransactions">
                <h3 class="title">Recent Transactions</h3>
                <ViewAllTransactions />
            </div>
        </>
    )
}