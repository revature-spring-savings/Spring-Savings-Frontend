import  ViewAllTransactions  from '../transaction/ViewAllTransactionsByUserID'
import { AccountByUserID } from "../account/AccountByUserID"
import './dashboard.scss'

export default function Dashboard(){

    return(
        <div id="dashboard-container">
            <div id="main-area">
            <div id="dashTitle">
                <h1 class="pageTitle">Dashboard</h1>
                <h3 class="title">Hello, User 2!</h3>          
            </div>
            </div>

            <div id="acctCards">                              
                <AccountByUserID />
                <br/><br/>              
            </div>
        </div>
    )
}



/* SINGLE COLUMN
return(
        <div id="dashboard-container">
            <div id="acctCards">                
                <div id="dashTitle">
                <h1 class="pageTitle">Dashboard</h1>
                <h3 class="title">Hello, User 2!</h3>
                </div>
                <AccountByUserID />
                <br/><br/>
              
            </div>
        </div>
    )
    */