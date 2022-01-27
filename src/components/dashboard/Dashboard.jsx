import  ViewAllTransactions  from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'
import IdleTime from '../IdleTime'


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
                <IdleTime/>
                
            </div>
        </>
    )
}