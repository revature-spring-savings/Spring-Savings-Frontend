import { AccountByUserID } from "../components/account/AccountByAcctID";
import '../scss/dashboard.css'

export default function Dashboard(){




    return(
        <>
            <div id="acctCards">
                <h1 class="pageTitle">View Accounts</h1>
                <AccountByUserID />
                <br/><br/>
                
            </div>
            <div id="latestTransactions">
                <h3 class="title">view latest transactions here</h3>
            </div>

        </>
    )
}